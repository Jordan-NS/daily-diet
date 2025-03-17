import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import { Statistics } from "@/screens/Statistics";
import { NewMeal } from "@/screens/NewMeal";
import { EditMeal } from "@/screens/EditMeal";
import { MealDetails } from "@/screens/MealDetails";
import { PositiveScreen } from '@/screens/NewMeal/PositiveScreen';
import { NegativeScreen } from '@/screens/NewMeal/NegativeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes()  {
  return(
    <Navigator screenOptions = {{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="positiveScreen" component={PositiveScreen} />
      <Screen name="negativeScreen" component={NegativeScreen} />
    </Navigator >
  );
}