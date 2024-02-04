import React from "react";
import {
  DidactGothic_400Regular,
  useFonts,
} from "@expo-google-fonts/didact-gothic";
import * as ExpoSplashScreen from "expo-splash-screen";

interface ResourceLoaderProps {
  children: React.ReactNode;
}

ExpoSplashScreen.preventAutoHideAsync();

const ResourceLoader: React.FC<ResourceLoaderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    DidactGothic_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  (async () => {
    await ExpoSplashScreen.hideAsync();
  })()

  return children;
};

export default ResourceLoader;
