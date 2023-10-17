import React from 'react';
import {Text, Button, TextInput, View} from 'react-native';

const GroceryShoppingList = () => {
  return (
    <View style={{padding: 10, flex: 1}} testID="LoginView">
      <TextInput testID="emailInput" placeholder="email" />
      <TextInput testID="passwordInput" placeholder="password" />
      <Button title="Login button" testID="loginButton" onPress={() => {}} />
      <Text testID="welcomeMessage" style={{padding: 10}}>
        Welcome
      </Text>
    </View>
  );
};

export default GroceryShoppingList;
