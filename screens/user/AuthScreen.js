import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
} from "react-native";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
const AuthScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff','#ffe3ff']} style={styles.gradient} >
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid email"
              onValueChange={() => {}}
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              required
              secureTextEntry
              minLength={5}
              autoCapitalize="none"
              errorMessage="Please enter a valid password"
              onValueChange={() => {}}
            />
            <Button title="Login" color={Colors.primary} onPress={() => {}} />
            <Button title="SignUp" color={Colors.accent} onPress={() => {}} />
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    height: "50%",
    maxHeight: 400,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
