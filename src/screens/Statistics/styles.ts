import styled, { css, DefaultTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
type ThemeProps = {
  theme: DefaultTheme;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View<{ isPositive: boolean }>`
  width: 100%;
  height: 200px;
  background-color: ${({ theme, isPositive }: { theme: DefaultTheme; isPositive: boolean }) =>
    isPositive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme, isPositive }: { theme: DefaultTheme; isPositive: boolean }) => ({
  size: 32,
  color: isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  color: ${({ theme, isPositive }: { theme: DefaultTheme; isPositive: boolean }) =>
    isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Percentage = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    text-align: center;
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -20px;
  border-radius: 20px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const StatCard = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_200};
  margin-bottom: 12px;
  align-items: center;
`;

export const WrapperStatCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const StatCardPositive = styled(StatCard)`
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GREEN_LIGHT};
  width: 48%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StatCardNegative = styled(StatCard)`
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.RED_LIGHT};
  width: 48%;
`;

export const StatTitle = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
  margin-bottom: 15px;
`;

export const StatValue = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;