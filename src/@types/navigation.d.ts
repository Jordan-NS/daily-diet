export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      editMeal: {
        mealId: string;
      };
      mealDetails: {
        mealId: string;
      };
      positiveScreen: undefined;
      negativeScreen: undefined;
    }
  }
}