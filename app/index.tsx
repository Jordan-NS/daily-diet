import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import theme from '../src/theme';
import { Loading } from '@/components/Loading';
import { Routes } from '@/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar style="light" />
      { fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
