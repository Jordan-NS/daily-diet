import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";

type ThemeProps = { theme: DefaultTheme };

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const StyledText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin-bottom: 8px;
`;

export const StyledImage = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 24px;
  margin-bottom: 24px;
  resizeMode: contain;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GREEN_DARK};
  align-items: center;
  margin-top: 24px;
`;

export const ButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;