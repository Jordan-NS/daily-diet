import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components'

type ThemeProps = { theme: DefaultTheme };

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
`;

export const TimeContainer = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
  padding-right: 12px;
  margin-right: 12px;
`;

export const Time = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.XS }px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;


export const MealName = styled.Text`
  flex: 1;
  ${({ theme }: ThemeProps) => css`
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const StatusIndicator = styled.View<{ isOnDiet: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isOnDiet }: { theme: DefaultTheme; isOnDiet: boolean }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;