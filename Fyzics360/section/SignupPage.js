import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { auth } from '../store/loginReducer';

const mapDispatchToProps = dispatch => {
  return {
    signup: (userName, userEmail, userPassword, formName) =>
      dispatch(auth(userName, userEmail, userPassword, formName)),
  };
};

const mapStateToProps = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
  };
};

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    console.log(this.props);
    let formName = this.props.name;
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    this.props.signup(name, email, password, formName);
  };

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput
          placeholder="Enter your name"
          value={this.state.name}
          name="Name"
          onChangeText={name => this.setState({ name })}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Enter your email"
          value={this.state.email}
          name="email"
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="Enter password"
          value={this.state.password}
          name="password"
          onChangeText={password => this.setState({ password })}
        />
        <Button
          title="SIGNUP"
          backgroundColor="#026FFE"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
