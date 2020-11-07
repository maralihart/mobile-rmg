import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  render() {
    const { message } = this.state
    console.log(message, "m")
    if(message == "") {
      return (
        <View style={styles.container}>
          <Button onPress={this.generateMessage} title="Generate Message" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button onPress={this.generateMessage} title="Change Message" />
          <Text style={styles.message}>{this.state.message}</Text>
        </View>
      )
    }
  }


  generateMessage = () => {
    const messages = [
      "Congratulations on hacking!",
      "You're such a diligent programmer!",
      "You've grown so much",
      "The progress you've made is phenomenal"
    ];
    const random = Math.floor(Math.random()*(messages.length - 1));
    const mess = messages[random];
    this.setState({message: mess});
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 30,
    color: '#081EF5',
  }
});

export default App;