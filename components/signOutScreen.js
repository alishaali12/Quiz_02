import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text } from "react-native";
import { auth } from "../firebase";
import { stylesSignOut } from "./style";

const SignOutScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={stylesSignOut.container}>
      <View style={stylesSignOut.textContainer}>
        <Text style={stylesSignOut.title}>SIGN OUT</Text>
        <Text style={stylesSignOut.message}>
          Are you sure you want to sign out?
        </Text>
      </View>
      <Pressable onPress={handleSignOut} style={stylesSignOut.button}>
        <Text style={stylesSignOut.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default SignOutScreen;
