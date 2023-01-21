import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";

import {
  useFonts as useRaleway,
  Raleway_400Regular,
  Raleway_200ExtraLight,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { WaveIndicator } from "react-native-indicators";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/index";
import { IndicatiorsComponent } from "./src/utils/activitivityIndicators/indicatiorsComponent";
import { IndexNavigation } from "./src/mainNavigation/IndexNavigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  AsyncStorage.clear();

  LogBox.ignoreLogs([]);

  const [ralewayLoaded] = useRaleway({
    Raleway_200ExtraLight,
    Raleway_400Regular,
    Raleway_600SemiBold,
  });

  if (!ralewayLoaded) {
    return <IndicatiorsComponent />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IndexNavigation />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050407",
    alignItems: "center",
    justifyContent: "center",
  },
});
