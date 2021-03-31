import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
// import reportWebVitals from './reportWebVitals';
import Router from './pages/Router';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'antd/dist/antd.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
console.log('process', process.env);

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Auth0Provider
          domain={process.env.REACT_APP_DOMAIN ?? ''}
          clientId={process.env.REACT_APP_CLIENT_ID ?? ''}
          redirectUri={window.location.origin}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
          </ThemeProvider>
        </Auth0Provider>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
