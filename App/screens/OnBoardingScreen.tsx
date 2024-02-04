import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { fontFamily } from "../theme";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

GoogleSignin.configure({
  webClientId:
    "209642338204-j39fvqnmp6dfh55jfgulq4l3tip005m5.apps.googleusercontent.com",
});

const OnboardingScreen = () => {
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const { idToken } = await GoogleSignin.signIn();

      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

      auth().signInWithCredential(googleCredentials);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/OnBoarding.jpg")}
        />
      </View>
      <Pressable onPress={googleSignIn} style={styles.signInButton}>
        <Image
          style={styles.googleLogo}
          source={require("../../assets/google-logo.webp")}
        />
        <Text style={styles.signInButtonText}>Sign in with Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 280,
    height: 280,
    aspectRatio: 1,
  },
  signInButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 50,
    elevation: 3,
    backgroundColor: "white",
    width: 240,
  },
  signInButtonText: {
    fontFamily: fontFamily.regular,
    fontWeight: "700",
  },
  googleLogo: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
});

export default OnboardingScreen;
