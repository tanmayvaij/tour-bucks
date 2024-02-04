import "expo-dev-client"
import RootNavigator from "./navigators/RootNavigator";
import ResourceLoader from "./components/ResourceLoader";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ResourceLoader>
      <StatusBar style="light"/>
      <RootNavigator />
    </ResourceLoader>
  );
}
