import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

type ThemeProps = {
  theme: DefaultTheme;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }: ThemeProps) => ({
  color: theme.COLORS.GREEN_DARK, 
}))``;
  