import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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

export default function App() {
  const [ralewayLoaded] = useRaleway({
    Raleway_200ExtraLight,
    Raleway_400Regular,
    Raleway_600SemiBold,
  });

  if (!ralewayLoaded) {
    return <IndicatiorsComponent />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
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
