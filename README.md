# Daily Diet

<img src="./assets/icon.png" width="100" alt="Daily Diet Logo" />

Um aplicativo móvel para monitoramento de dieta que permite registrar refeições, classificá-las como dentro ou fora da dieta e acompanhar seu progresso através de estatísticas.

## 🍽️ Funcionalidades

- **Registro de Refeições**: Adicione suas refeições com nome, descrição, data, hora e status (dentro/fora da dieta).
- **Visualização Detalhada**: Veja informações detalhadas sobre cada refeição registrada.
- **Edição e Exclusão**: Edite os detalhes das refeições ou exclua registros.
- **Feedback Visual**: Receba feedback visual após adicionar ou editar uma refeição, baseado em seu status na dieta.
- **Estatísticas**:
  - Percentual de refeições dentro da dieta
  - Sequência atual de refeições dentro da dieta
  - Total de refeições registradas
  - Refeições dentro e fora da dieta

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Phosphor Icons](https://phosphoricons.com/)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

## 💻 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/daily-diet.git
cd daily-diet
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o aplicativo:
```bash
npx expo start
```

4. Use o aplicativo Expo Go em seu dispositivo para escanear o QR code ou execute em um emulador.

## 📱 Uso

1. Na tela inicial, clique em "Nova refeição" para adicionar uma refeição.
2. Preencha os detalhes da refeição (nome, descrição, data, hora) e selecione se está dentro ou fora da dieta.
3. Após salvar, você receberá um feedback visual baseado no status da refeição.
4. Na tela inicial, você pode:
   - Ver todas as suas refeições organizadas por data
   - Verificar suas estatísticas gerais
   - Clicar em uma refeição para ver detalhes, editar ou excluir

## 📁 Estrutura do Projeto

```
src/
├── @types/           # Declarações de tipo TypeScript
├── assets/           # Imagens e recursos
├── components/       # Componentes reutilizáveis
├── routes/           # Configuração de navegação
├── screens/          # Telas do aplicativo
├── storage/          # Lógica de armazenamento local
└── theme/            # Definições de tema (cores, fontes)
```

## 📷 Screenshots

*Adicione screenshots do seu aplicativo aqui*

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Desenvolvedor

*Seu nome aqui* - [Seu perfil no GitHub](https://github.com/seu-usuario)

---

Feito com ❤️ e React Native 