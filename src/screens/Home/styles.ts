import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import { Plus } from 'phosphor-react-native';

type ThemeProps = { theme: DefaultTheme };

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const FirstTitle = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.LG }px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.MD }px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 8px ;
  margin-top: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 30px;
  flex-direction: row;
`;

export const ButtonIcon = styled(Plus).attrs(({ theme }: ThemeProps) => ({
  size: 20,
  color: theme.COLORS.WHITE
}))`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
    color: ${theme.COLORS.WHITE};
  `};
`;