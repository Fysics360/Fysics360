import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

class Head extends Component {
  render() {
    console.log('In the header pager', this.props);
    const headerTitle = this.props.loggedInUser
      ? this.props.loggedInUser
      : 'Fyzics360';
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: headerTitle, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor="#FF0000"
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUser: state.login.user.name,
  };
};

export default connect(
  mapStateToProps,
  null
)(Head);
