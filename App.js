import { Entypo } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
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
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Read(a)Book",
            headerLeft: () => {
              return <Entypo name="book" size={24} color="black" />;
            },
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
