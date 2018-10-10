import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { createStackNavigator } from 'react-navigation';
import Head from './section/Head';
import HomePage from './section/Homepage';
import SignUpPage from './section/SignupPage';
import LoginPage from './section/LoginPage';
import UserHome from './section/UserHome';

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: HomePage,
    },
    Signup: {
      screen: SignUpPage,
    },
    Login: {
      screen: LoginPage,
    },
    UserHome: {
      screen: UserHome,
    },
  },
  {
    initialRouteName: 'HomeRT',
    navigationOptions: {
      header: props => <Head {...props} />,
      headerStyle: {
        backgroundColor: 'transparent',
      },
    },
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
