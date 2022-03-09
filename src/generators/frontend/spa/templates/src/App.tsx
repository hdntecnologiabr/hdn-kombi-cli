import React from 'react';
import { HashRouter } from 'react-router-dom';

import { IntlProvider } from './i18n';
import Routes from './Routes';

export default function App() {
  return (
    <IntlProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </IntlProvider>
  );
}
