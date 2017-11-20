import React from 'react';
import { UIManager } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import AppNavigation from './src/navigations';


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({ uri: 'http://localhost:3001/graphql'}),
  cache: new InMemoryCache()
});

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// const middlewares = [client.middleware(), thunk];

// export const store = createStore(
  // reducers(client),
  // undefined,
  // composeWithDevTools(applyMiddleware(...middlewares)),
// );

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
