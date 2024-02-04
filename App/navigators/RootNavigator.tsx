import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnBoardingScreen";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import HomeScreen from "../screens/HomeScreen";
import AddTripScreen from "../screens/AddTripScreen";

const NativeStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
    return subscribe;
  }, []);

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        {!user ? (
          <NativeStack.Screen
            options={{ headerShown: false }}
            name="ON_BOARDING_SCREEN"
            component={OnboardingScreen}
          />
        ) : (
          <NativeStack.Group>
            <NativeStack.Screen
              options={{ headerTitle: "Home", headerTitleAlign: "center" }}
              name="HOME_SCREEN"
              component={HomeScreen}
            />
            <NativeStack.Screen
              options={{ headerTitle: "Add Trip", headerTitleAlign: "center" }}
              name="ADD_TRIP_SCREEN"
              component={AddTripScreen}
            />
          </NativeStack.Group>
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
