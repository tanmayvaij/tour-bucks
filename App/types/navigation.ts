import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ON_BOARDING_SCREEN: undefined;
  HOME_SCREEN: undefined;
  ADD_TRIP_SCREEN: undefined;
};

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ADD_TRIP_SCREEN"
>;
