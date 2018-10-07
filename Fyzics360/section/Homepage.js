import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

class HomePage extends Component {
  onPress = () => {
    Alert.alert('You clicked me');
  };

  onSignupPress = () => {
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={this.onSignupPress}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.buttonText}>About Fyzics360</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: '#BDC3C7',
    height: '50%',
    width: '50%',
    justifyContent: 'center',
  },
  container: {
    flex: 6,
    backgroundColor: '#F0F3F4',
  },
  buttonText: {
    color: '#FF9733',
    fontSize: 18,
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#5DADE2',
    borderBottomWidth: 1,
  },
});

export default HomePage;
