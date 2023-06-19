import { StyleSheet, View, Text } from "react-native";
import Navigation from "./src/navigation/navigation";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    return (
      <View>
        <Text>Cargando fuentes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
