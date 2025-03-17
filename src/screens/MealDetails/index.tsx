import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getMealById, removeMeal } from '@/storage/meal';
import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Content,
  MealInfoContainer,
  MealTitle,
  MealDescription,
  InfoTitle,
  InfoText,
  DateTimeContainer,
  StatusContainer,
  StatusCircle,
  StatusText,
  ButtonsContainer,
  EditButton,
  EditButtonText,
  DeleteButton,
  DeleteButtonText
} from './styles';

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

type RouteParams = {
  mealId: string;
};

export function MealDetails() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [isOnDiet, setIsOnDiet] = React.useState<boolean | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  async function loadMeal() {
    try {
      const meal = await getMealById(mealId);
      if (meal) {
        setName(meal.name);
        setDescription(meal.description);
        setDate(meal.date);
        setTime(meal.time);
        setIsOnDiet(meal.isOnDiet);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Não foi possível carregar a refeição');
    }
  }

  function handleEdit() {
    navigation.navigate('editMeal', { mealId });
  }

  function handleDeletePress() {
    setDeleteModalVisible(true);
  }

  async function handleConfirmDelete() {
    try {
      await removeMeal(mealId);
      setDeleteModalVisible(false);
      navigation.navigate('home');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Não foi possível excluir a refeição');
    }
  }

  React.useEffect(() => {
    loadMeal();
  }, [mealId]);

  return (
    <Container isOnDiet={isOnDiet}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <Title>Refeição</Title>
      </Header>
      <Content>
        <MealInfoContainer>
          <MealTitle>{name}</MealTitle>
          <MealDescription>{description}</MealDescription>

          <InfoTitle>Data e hora</InfoTitle>
          <DateTimeContainer>
            <InfoText>{date}</InfoText>
            <InfoText> às </InfoText>
            <InfoText>{time}</InfoText>
          </DateTimeContainer>

          <StatusContainer>
            <StatusCircle isOnDiet={isOnDiet} />
            <StatusText>
              {isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
            </StatusText>
          </StatusContainer>
        </MealInfoContainer>

        <ButtonsContainer>
          <EditButton onPress={handleEdit}>
            <EditButtonText>Editar refeição</EditButtonText>
          </EditButton>

          <DeleteButton onPress={handleDeletePress}>
            <DeleteButtonText>Excluir refeição</DeleteButtonText>
          </DeleteButton>
        </ButtonsContainer>
      </Content>

      <DeleteConfirmModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
} 