import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { fontFamily } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProps } from "../types/navigation";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const signOut = async () => {
    auth()
      .signOut()
      .then(() => {
        GoogleSignin.revokeAccess()
          .then(() => {
            console.log("user revoked");
          })
          .catch((err) => {
            console.log(err);
          });

        console.log("User signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      {/* <Button title="Sign out" onPress={signOut} /> */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Trips</Text>

        <Pressable
          style={styles.addTripButton}
          onPress={() => navigation.navigate("ADD_TRIP_SCREEN")}
        >
          <Text style={styles.addTripButtonText}>Add Trip</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: fontFamily.regular,
    fontWeight: "700",
    fontSize: 18,
  },
  addTripButton: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
  },
  addTripButtonText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});

export default HomeScreen;
