import React from 'react';
import { UIManager } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import { Provider } from 'react-redux';

import { colors } from './src/utils/constants';
import AppNavigation from './src/navigations';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql'}),
  cache: new InMemoryCache()
});

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const middlewares = [thunk];

export const store = createStore(
  reducers(),
  undefined,
  applyMiddleware(...middlewares)
);

// Why can't I just pass the store to the apollo provider?
// Why do I have to thread the store in manually?
export default class App extends React.Component {
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={colors}>
            <AppNavigation store={store}/>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    );
  }
}
