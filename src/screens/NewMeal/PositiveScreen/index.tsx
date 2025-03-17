import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container, StyledImage, StyledText, Button, ButtonText } from './styles';

type RootStackParamList = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined;
  editMeal: undefined;
  positiveScreen: undefined;
  negativeScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function PositiveScreen() {
  const navigation = useNavigation<NavigationProps>();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <StyledText>Continue assim!</StyledText>
      <StyledText>Você continua dentro da dieta. Muito bem!</StyledText>
      <StyledImage source={require('@/assets/Illustration-positive.png')} />
      <Button onPress={handleGoBack}>
        <ButtonText>Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  );
}

