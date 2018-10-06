import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { createStackNavigator } from 'react-navigation'
import Header from './section/Header';

const MyRoutes = createStackNavigator({

},
  {
    initialRouteName: ''
  })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Homepage />
        <MyRoutes />
      </Provider>
    );
  }
}



