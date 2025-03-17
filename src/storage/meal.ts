import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
}

const MEAL_COLLECTION = '@daily-diet:meals';

export async function getMeals(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Meal[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}

export async function saveMeal(newMeal: Meal) {
  try {
    const storedMeals = await getMeals();
    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export async function updateMeal(updatedMeal: Meal) {
  try {
    const storedMeals = await getMeals();
    const updatedMeals = storedMeals.map(meal => 
      meal.id === updatedMeal.id ? updatedMeal : meal
    );
    const storage = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export async function removeMeal(mealId: string) {
  try {
    const storedMeals = await getMeals();
    const mealsWithoutDeleted = storedMeals.filter(meal => meal.id !== mealId);
    const storage = JSON.stringify(mealsWithoutDeleted);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export async function getMealById(mealId: string): Promise<Meal | undefined> {
  try {
    const storedMeals = await getMeals();
    return storedMeals.find(meal => meal.id === mealId);
  } catch (error) {
    throw error;
  }
}