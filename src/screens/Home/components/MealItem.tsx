import React from 'react';
import { Meal } from '@/storage/meal';
import {
  Container,
  TimeContainer,
  Time,
  MealName,
  StatusIndicator
} from './styles';

interface MealItemProps {
  meal: Meal;
  onPress: () => void;
}

export function MealItem({ meal, onPress }: MealItemProps) {
  return (
    <Container onPress={onPress}>
      <TimeContainer>
        <Time>{meal.time}</Time>
      </TimeContainer>
      <MealName>{meal.name}</MealName>
      <StatusIndicator isOnDiet={meal.isOnDiet} />
    </Container>
  );
}