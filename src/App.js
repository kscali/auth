import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIjlCXtrb1vSx4TpGbdwgEK5pliuUsovo",
      authDomain: "authentication-2f174.firebaseapp.com",
      databaseURL: "https://authentication-2f174.firebaseio.com",
      projectId: "authentication-2f174",
      storageBucket: "authentication-2f174.appspot.com",
      messagingSenderId: "1077276903229",
      appId: "1:1077276903229:web:c2ddede6ab04633a"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
