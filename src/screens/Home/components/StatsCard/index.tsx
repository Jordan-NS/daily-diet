import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Percentage, Description, ArrowIcon } from './styles';

type StatsCardProps = {
  percentage: number;
};

export function StatsCard({ percentage }: StatsCardProps) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('statistics')} isPositive={percentage >= 50}>
      <ArrowIcon isPositive={percentage >= 50} />
      <Percentage>{percentage.toFixed(2)}%</Percentage>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}