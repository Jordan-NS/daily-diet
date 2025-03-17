import styled, { css, DefaultTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';

type ThemeProps = {
  theme: DefaultTheme;
};

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: ${width * 0.85}px;
  padding: 24px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin-bottom: 32px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  border-radius: 6px;
  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.COLORS.GRAY_200};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  align-items: center;
`;

export const CancelButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  border-radius: 6px;
  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.COLORS.GRAY_600};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  align-items: center;
`;

export const ConfirmButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`; 