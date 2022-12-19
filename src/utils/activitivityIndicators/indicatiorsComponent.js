import React from "react";
import { StyleSheet, View } from "react-native";
import { WaveIndicator } from "react-native-indicators";

export const IndicatiorsComponent = () => {
  return (
    <View style={styles.container}>
      <WaveIndicator
        size={50}
        color="#2077ff"
        waveFactor={0.8}
        waveMode="outline"
        count={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050407",
    alignItems: "center",
    justifyContent: "center",
  },
});
