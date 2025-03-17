import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getMealById, updateMeal, removeMeal } from '@/storage/meal';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Form,
  Label,
  Input,
  Row,
  Column,
  DietOptions,
  DietButton,
  DietButtonText,
  ButtonsContainer,
  SaveButton,
  DeleteButton,
  ButtonText,
  Content,
  StatusCircle
} from './styles';
import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';

type RootStackParamList = {
  home: undefined;
  statistics: undefined;
  newMeal: undefined;
  editMeal: { mealId: string };
  positiveScreen: undefined;
  negativeScreen: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type RouteParams = {
  mealId: string;
};

export function EditMeal() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [isOnDiet, setIsOnDiet] = React.useState<boolean | null>(null);
  const [originalIsOnDiet, setOriginalIsOnDiet] = React.useState<boolean | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  const formatDate = (text: string) => {
    // Remove qualquer caractere que não seja número
    const cleanText = text.replace(/[^0-9]/g, '');
    
    // Limita a 8 dígitos (DDMMAAAA)
    const limited = cleanText.substring(0, 8);
    
    // Formata como DD/MM/AAAA
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 4) {
      return `${limited.substring(0, 2)}/${limited.substring(2)}`;
    } else {
      return `${limited.substring(0, 2)}/${limited.substring(2, 4)}/${limited.substring(4)}`;
    }
  };

  const formatTime = (text: string) => {
    // Remove qualquer caractere que não seja número
    const cleanText = text.replace(/[^0-9]/g, '');
    
    // Limita a 4 dígitos (HHMM)
    const limited = cleanText.substring(0, 4);
    
    // Formata como HH:MM
    if (limited.length <= 2) {
      return limited;
    } else {
      return `${limited.substring(0, 2)}:${limited.substring(2)}`;
    }
  };

  const handleDateChange = (text: string) => {
    setDate(formatDate(text));
  };

  const handleTimeChange = (text: string) => {
    setTime(formatTime(text));
  };

  async function loadMeal() {
    try {
      const meal = await getMealById(mealId);
      if (meal) {
        setName(meal.name);
        setDescription(meal.description);
        setDate(meal.date);
        setTime(meal.time);
        setIsOnDiet(meal.isOnDiet);
        setOriginalIsOnDiet(meal.isOnDiet);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Não foi possivel carregar a refeição');
    }
  }

  async function handleSave() {
    if (!name || !description || !date || !time || isOnDiet === null) {
      Alert.alert('Error', 'Por favor preencha todos os campos');
      return;
    }

    // Validação do formato da data (DD/MM/AAAA)
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(date)) {
      Alert.alert('Error', 'Formato de data inválido. Use DD/MM/AAAA');
      return;
    }

    // Validação do formato da hora (HH:MM)
    const timeRegex = /^(\d{2}):(\d{2})$/;
    if (!timeRegex.test(time)) {
      Alert.alert('Error', 'Formato de hora inválido. Use HH:MM');
      return;
    }

    try {
      await updateMeal({
        id: mealId,
        name,
        description,
        date,
        time,
        isOnDiet,
      });

      // Navega para a tela correspondente baseado no valor de isOnDiet
      if (isOnDiet) {
        navigation.navigate('positiveScreen');
      } else {
        navigation.navigate('negativeScreen');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Não foi possivel atualizar a refeição');
    }
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
      Alert.alert('Error', 'Não foi possivel excluir a refeição');
    }
  }

  React.useEffect(() => {
    loadMeal();
  }, [mealId]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <Title>Editar Refeição</Title>
      </Header>
      <Content>
        <Form>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Nome da refeição"
          />

          <Label>Descrição</Label>
          <Input
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição da refeição"
            multiline
            numberOfLines={4}
            style={{ height: 120, textAlignVertical: 'top' }}
          />

          <Row>
            <Column>
              <Label>Data</Label>
              <Input
                value={date}
                onChangeText={handleDateChange}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
              />
            </Column>

            <Column>
              <Label>Hora</Label>
              <Input
                value={time}
                onChangeText={handleTimeChange}
                placeholder="HH:MM"
                keyboardType="numeric"
              />
            </Column>
          </Row>

          <Label>Está dentro da dieta?</Label>
          <DietOptions>
            <DietButton
              isSelected={isOnDiet === true}
              isOnDiet={true}
              onPress={() => setIsOnDiet(true)}
            >
              <StatusCircle isOnDiet={true} />
              <DietButtonText>Sim</DietButtonText>
            </DietButton>

            <DietButton
              isSelected={isOnDiet === false}
              isOnDiet={false}
              onPress={() => setIsOnDiet(false)}
            >
              <StatusCircle isOnDiet={false} />
              <DietButtonText>Não</DietButtonText>
            </DietButton>
          </DietOptions>

          <ButtonsContainer>
            <SaveButton onPress={handleSave}>
              <ButtonText>Salvar alterações</ButtonText>
            </SaveButton>

            <DeleteButton onPress={handleDeletePress}>
              <ButtonText isDelete>Excluir refeição</ButtonText>
            </DeleteButton>
          </ButtonsContainer>
        </Form>
      </Content>
      
      <DeleteConfirmModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
}