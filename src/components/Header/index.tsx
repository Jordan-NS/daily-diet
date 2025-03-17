import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, BackButton, Logo, BackIcon, ProfileContainer, ProfileIcon } from './styles';
import { useTheme } from 'styled-components/native';
import logoImg from '@/assets/Logo.png';
type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
};

export function Header({ showBackButton = false, title }: HeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
      <ProfileContainer>
        <ProfileIcon />
      </ProfileContainer>
    </Container>
  );
}