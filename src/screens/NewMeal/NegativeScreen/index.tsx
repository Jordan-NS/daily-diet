import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container, StyledImage, StyledText, Button, ButtonText } from './styles';

type RootStackParamList = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined;
  editMeal: { mealId: string };
  positiveScreen: undefined;
  negativeScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function NegativeScreen() {
  const navigation = useNavigation<NavigationProps>();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <StyledText>Que pena!</StyledText>
      <StyledText>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</StyledText>
      <StyledImage source={require('@/assets/Illustration_negative.png')} />
      <Button onPress={handleGoBack}>
        <ButtonText>Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  );
}


