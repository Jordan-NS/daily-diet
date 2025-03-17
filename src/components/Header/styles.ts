import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';
import { ArrowLeft, User } from 'phosphor-react-native';
type ThemeProps = { theme: DefaultTheme };

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }: ThemeProps) => ({
  size: 32,
  color: theme.COLORS.GRAY_600,
}))``;  

export const ProfileContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_200};
  border: 2px solid ${({ theme }: ThemeProps) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const ProfileIcon = styled(User).attrs(({ theme }: ThemeProps) => ({
  size: 24,
  color: theme.COLORS.GRAY_600
}))`
  color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_600};
`;
