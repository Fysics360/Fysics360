import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  viewRow: {
    flex: 3,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
});

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
      <View style={styles.container}>
        <View style={styles.viewRow}>
          <View
            style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
          />
        </View>
        <View style={styles.viewRow}>
          <View
            style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
          />
        </View>
        <View style={styles.viewRow}>
          <View
            style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
