import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { createStackNavigator } from 'react-navigation';
// import Head from './section/Head';
import HomePage from './section/Homepage';
import SignUpPage from './section/SignupPage';

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: HomePage,
    },
    Signup: {
      screen: SignUpPage,
    },
  },
  {
    initialRouteName: 'HomeRT',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    );
  }
}
