import { ThemeProvider } from 'styled-components';

import { InitStyled } from '~styles/init';
import { defaultTheme } from '~styles/theme';

import Home from './pages/home';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InitStyled />

      <Home />
    </ThemeProvider>
  );
}

export default App;
