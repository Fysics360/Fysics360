import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>In the user home</Text>
      </View>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserHome);

export default UserHome;
