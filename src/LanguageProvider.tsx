import { FC } from 'react';
import { IntlProvider } from 'react-intl';
import en from 'src/lang/en.json';
import pt from 'src/lang/pt.json';
import { LocaleEnum, useLanguage } from 'src/helpers/useLanguage';

type MessageProps = {
  [key: string]: {
    [label: string]: string;
  };
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const { locale } = useLanguage();

  const enMessages = { ...en };
  const brMessages = { ...pt };

  const messages: MessageProps = {
    [LocaleEnum.En]: enMessages,
    [LocaleEnum.Pt]: brMessages,
  };

  return (
    <IntlProvider
      messages={messages?.[locale]}
      locale={locale}
      defaultLocale={'pt'}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
