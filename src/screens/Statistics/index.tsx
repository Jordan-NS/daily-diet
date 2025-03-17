import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Container, 
  Header, 
  BackButton,
  Percentage,
  Description,
  Content,
  StatCard,
  StatValue,
  StatTitle,
  StatCardPositive,
  StatCardNegative,
  WrapperStatCard, 
} from './styles';

import { getMeals } from '@/storage/meal';
import { BackIcon } from './styles';
import { Title } from '../Home/styles';
import { View } from 'react-native';


export function Statistics() {
  const navigation = useNavigation();
  const [stats, setStats] = React.useState({
    total: 0,
    onDiet: 0,
    offDiet: 0,
    percentage: 0,
    bestSequence: 0,
  });

  async function loadStatistics() {
    try {
      const meals = await getMeals();
      const total = meals.length;
      const onDiet = meals.filter(meal => meal.isOnDiet).length;
      const offDiet = total - onDiet;
      const percentage = total > 0 ? Math.round((onDiet / total) * 100) : 0;

      // Calculate best sequence of meals within diet
      let currentSequence = 0;
      let bestSequence = 0;
      
      meals.forEach(meal => {
        if (meal.isOnDiet) {
          currentSequence++;
          bestSequence = Math.max(bestSequence, currentSequence);
        } else {
          currentSequence = 0;
        }
      });

      setStats(prevStats => ({ ...prevStats, total, onDiet, offDiet, percentage, bestSequence }));
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <Container>
      <Header isPositive={stats.percentage >= 50}>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon isPositive={stats.percentage >= 50} />
        </BackButton>
        <Percentage>{stats.percentage.toFixed(2)}%</Percentage>
        <Description>das refeições dentro da dieta</Description>
      </Header>

      <Content>
        <StatTitle>Estatísticas gerais</StatTitle>
        <StatCard>
          <StatValue>{stats.bestSequence}</StatValue>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </StatCard>

        <StatCard>
          <StatValue>{stats.total}</StatValue>
          <Description>refeições registradas</Description>
        </StatCard>
        <WrapperStatCard>
          <StatCardPositive>
            <StatValue>{stats.onDiet}</StatValue>
            <Description>refeições dentro da dieta</Description>
          </StatCardPositive>

          <StatCardNegative>
            <StatValue>{stats.offDiet}</StatValue>
            <Description>refeições fora da{"\n"}dieta</Description>
          </StatCardNegative>
        </WrapperStatCard>
      </Content>
    </Container>
  );
}