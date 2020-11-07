import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  render() {
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
          <Text>{{this.state.message}}</Text>
        </View>
      )
    }
    
  }
}

generateMessage() {
  var messages = [
    "Congratulations on hacking!",
    "You're such a diligent programmer!",
    "You've grown so much",
    "The progress you've made is phenomenal"
  ];

  var random = Math.floor(Math.random()*(messages.length - 1));
  var mess = messages[random];
  this.setState({message: mess});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
