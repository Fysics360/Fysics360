import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';

function mapStateToProps(state) {
  return {};
}

class SignupPage extends Component {
  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput />
      </View>
    );
  }
}

export default connect(mapStateToProps)(SignupPage);
