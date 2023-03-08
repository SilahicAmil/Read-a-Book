import { Entypo } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMSerif-Display": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
    "Kantumury-Pro": require("./assets/fonts/KantumruyPro-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerLeft: () => {
            return (
              <Entypo
                name="book"
                size={24}
                color="black"
                style={styles.leftLogo}
              />
            );
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleAlign: "left",
          headerRight: () => {
            return (
              <Entypo
                name="menu"
                size={24}
                color="black"
                style={styles.rightLogo}
              />
            );
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Read(a)Book",
            tabBarLabelPosition: "below-icon",

            tabBarIcon: () => {
              return <Entypo name="book" size={24} color="black" />;
            },
            tabBarLabel: "Home",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rightLogo: {
    marginRight: 8,
  },
  leftLogo: {
    marginLeft: 12,
  },
});
