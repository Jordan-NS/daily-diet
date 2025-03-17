import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';
import { DefaultTheme } from 'styled-components';

type ContainerProps = {
  isPositive: boolean;
};

type ThemeProps = {
  theme: DefaultTheme;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme, isPositive }: { theme: DefaultTheme; isPositive: boolean }) =>
    isPositive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-bottom: 24px;
  align-items: center;
  position: relative;
`;

export const Percentage = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme, isPositive }: { theme: DefaultTheme; isPositive: boolean }) => ({
  size: 24,
  color: isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;