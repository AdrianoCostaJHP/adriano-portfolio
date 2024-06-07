import { Box, ThemeProvider } from '@mui/material';
import { customTheme } from 'src/common/theme';
import { FormattedMessage } from 'react-intl';
import LanguageProvider from './LanguageProvider';

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <LanguageProvider>
          <Box bgcolor="red" p={3}>
            <p>
              <FormattedMessage id="label.user" />
            </p>
          </Box>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
