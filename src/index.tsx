import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { Main } from '@components/main';

import { client } from '@api/HTTP';

const rootElement = document.getElementById('root');

const renderApp = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <Suspense fallback={<p>Loading...</p>}>
      <ApolloProvider {...{ client }}>
        <Router>
          <Component />
        </Router>
      </ApolloProvider>
    </Suspense>,
    rootElement
  );
};

renderApp(Main as () => JSX.Element);
