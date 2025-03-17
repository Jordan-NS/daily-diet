import styled, { css, DefaultTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

type ThemeProps = { theme: DefaultTheme };

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 8px;
  align-items: flex-start;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }: ThemeProps) => ({
  size: 32,
  color: theme.COLORS.GRAY_700
}))``;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -20px;
  border-radius: 20px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const Form = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    margin-bottom: 4px;
  `}
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  ${({ theme }: ThemeProps) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-bottom: 24px;
`;

export const Column = styled.View`
  flex: 1;
`;

export const DietOptions = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 24px;
`;

export const DietButton = styled.TouchableOpacity<{
  isSelected: boolean;
  isOnDiet: boolean;
}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 6px;
  margin: 0 4px;
  background-color: ${({
    theme,
    isSelected,
    isOnDiet,
  }: {
    theme: DefaultTheme;
    isSelected: boolean;
    isOnDiet: boolean;
  }) =>
    isSelected
      ? isOnDiet
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
  border: ${({
    theme,
    isSelected,
    isOnDiet,
  }: {
    theme: DefaultTheme;
    isSelected: boolean;
    isOnDiet: boolean;
  }) =>
    isSelected
      ? `1px solid ${
          isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        }`
      : "none"};
`;

export const DietButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-left: 8px;
`;

export const StatusCircle = styled.View<{ isOnDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isOnDiet }: { theme: DefaultTheme;
    isOnDiet: boolean;
   }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonsContainer = styled.View`
  gap: 8px;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_700};
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_200};
  align-items: center;
  border: 1px solid ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
`;

export const ButtonText = styled.Text<{ isDelete?: boolean }>`
  ${({ theme, isDelete }: ThemeProps & { isDelete?: boolean }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${isDelete ? theme.COLORS.RED_DARK : theme.COLORS.WHITE};
  `};
`;