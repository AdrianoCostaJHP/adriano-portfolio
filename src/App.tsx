import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from 'src/common/theme';
import LanguageProvider from './LanguageProvider';
import Router from './Router';

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <LanguageProvider>
          <Router />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
