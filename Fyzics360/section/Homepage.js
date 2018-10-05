import React, { Component } from 'react';
import { Header } from 'react-native-elements';

class Homepage extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Fyzics360', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor='#FF0000'
      />
    );
  }
}

export default Homepage;
