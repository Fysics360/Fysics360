import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { login } from '../store/loginReducer';

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(login(userData)),
  };
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    let email = this.state.email;
    let password = this.state.password;
    this.props.login({ email, password });
    console.log("I'm loggin man");
    console.log(email, password);
    this.props.navigation.navigate('UserHome');
  };

  render() {
    return (
      <View>
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
          title="LOGIN"
          backgroundColor="#026FFE"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
