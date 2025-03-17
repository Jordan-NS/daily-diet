import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

type ThemeProps = { theme: DefaultTheme };

export const DietButton = styled.TouchableOpacity<{ isSelected: boolean; isOnDiet: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme, isSelected, isOnDiet }: { theme: DefaultTheme; isSelected: boolean; isOnDiet: boolean }) =>
    isSelected
      ? isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
`;

export const DietButtonText = styled.Text<{ isOnDiet: boolean }>`
  ${({ theme, isOnDiet }: { theme: DefaultTheme; isOnDiet: boolean }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;
