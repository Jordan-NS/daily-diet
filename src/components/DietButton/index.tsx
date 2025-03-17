import { DietButton as DietButtonComponent, DietButtonText } from './styles';

export function DietButton({ isSelected, isOnDiet, onPress, text }: { isSelected: boolean; isOnDiet: boolean; onPress: () => void; text: string }) {
  return (
    <DietButtonComponent isSelected={isSelected} isOnDiet={isOnDiet} onPress={onPress}>
      <DietButtonText isOnDiet={isOnDiet}>{text}</DietButtonText>
    </DietButtonComponent>
  );
}

DietButton.defaultProps = {
  isSelected: false,
  isOnDiet: false,
  onPress: () => {},
  text: '',
};