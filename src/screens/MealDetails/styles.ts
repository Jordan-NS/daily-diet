import styled, { css, DefaultTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

type ThemeProps = { theme: DefaultTheme };

export const Container = styled.View<{ isOnDiet: boolean | null }>`
  flex: 1;
  background-color: ${({ theme, isOnDiet }: ThemeProps & { isOnDiet: boolean | null }) => 
    isOnDiet === true 
      ? theme.COLORS.GREEN_LIGHT 
      : isOnDiet === false 
        ? theme.COLORS.RED_LIGHT 
        : theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 24px;
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
  justify-content: center;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const MealInfoContainer = styled.View`
  flex: 1;
`;

export const MealTitle = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const MealDescription = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 24px;
`;

export const InfoTitle = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const InfoText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_200};
  margin-bottom: 32px;
`;

export const StatusCircle = styled.View<{ isOnDiet: boolean | null }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isOnDiet }: { theme: DefaultTheme, isOnDiet: boolean | null }) => 
    isOnDiet === true 
      ? theme.COLORS.GREEN_DARK 
      : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const StatusText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ButtonsContainer = styled.View`
  gap: 8px;
  margin-top: auto;
`;

export const EditButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_700};
  align-items: center;
`;

export const EditButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_200};
  align-items: center;
  border: 1px solid ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
`;

export const DeleteButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.RED_DARK};
  `}
`; 