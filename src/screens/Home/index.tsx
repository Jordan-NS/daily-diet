import React from 'react';
import {  ActivityIndicator, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getMeals, Meal } from '../../storage/meal';
import { Container, AddButton, ButtonText, Title, FirstTitle, ButtonIcon } from './styles';
import { MealItem } from './components/MealItem';
import { Header } from '@/components/Header';
import { StatsCard } from './components/StatsCard';
import { Plus } from 'phosphor-react-native';

type RootStackParamList = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined;
  editMeal: { mealId: string };
  mealDetails: { mealId: string };
  positiveScreen: undefined;
  negativeScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
  const navigation = useNavigation<NavigationProps>();
  const [meals, setMeals] = React.useState<Meal[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [percentage, setPercentage] = React.useState(0);

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const storedMeals = await getMeals();
      setMeals(storedMeals);
      const onDietMeals = storedMeals.filter(meal => meal.isOnDiet);
      const percentage = (onDietMeals.length / storedMeals.length) * 100 || 0;
      setPercentage(percentage);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    fetchMeals();
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchMeals();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <Header />
      <StatsCard percentage={percentage} />
      <FirstTitle>Refeições</FirstTitle>
      <AddButton onPress={() => navigation.navigate('newMeal')}>
        <ButtonIcon>
          <Plus />
        </ButtonIcon>
        <ButtonText>Nova refeição</ButtonText>
      </AddButton>

      {isLoading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <SectionList
          sections={Object.entries(meals.reduce((acc, meal) => {
            if (!acc[meal.date]) {
              acc[meal.date] = [];
            }
            acc[meal.date].push(meal);
            return acc;
          }, {} as Record<string, Meal[]>)).map(([date, items]) => ({
            title: date,
            data: items.sort((a, b) => b.time.localeCompare(a.time))
          })).sort((a, b) => b.title.localeCompare(a.title))}
          renderItem={({ item }) => (
            <MealItem
              meal={item}
              onPress={() => navigation.navigate('mealDetails', { mealId: item.id })}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </Container>
  );
}