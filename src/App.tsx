import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "./common/theme";
import { FormattedMessage, IntlProvider } from "react-intl";
import en from "./lang/en.json";
import pt from "./lang/pt.json";

type MessageProps = {
  [key: string]: {
    [id: string]: string;
  };
};

function App() {
  const locale = navigator.language.split("-")?.[0];
  const enMessages = { ...en };
  const brMessages = { ...pt };

  const locales: MessageProps = {
    ["en"]: enMessages,
    ["pt"]: brMessages,
  };


  return (
    <>
      <ThemeProvider theme={customTheme}>
        <IntlProvider
          locale={locale}
          messages={locales?.[locale]}
          defaultLocale="pt"
        >
          <Box bgcolor="red" p={3}>
            <p>
              <FormattedMessage id="label.user" />
            </p>
          </Box>
        </IntlProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
