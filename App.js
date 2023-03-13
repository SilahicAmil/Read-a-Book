import AllBooksScreen from "./screens/AllBooksScreen";
import AudioPlayerScreen from "./screens/AudioPlayerScreen";
import BooksDetailsScreen from "./screens/BooksDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import UserProfileScreen from "./screens/UserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMSerif-Display": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
    "Kantumury-Pro": require("./assets/fonts/KantumruyPro-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="TabHome"
        screenOptions={{
          headerLeft: () => {
            return (
              <Ionicons
                name="book"
                size={24}
                color="black"
                style={styles.leftLogo}
              />
            );
          },

          headerTitleAlign: "left",
          headerRight: () => {
            return (
              <Ionicons
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
          name="TabHome"
          component={HomeScreen}
          options={{
            title: "Read(a)Book",
            tabBarLabelPosition: "below-icon",

            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color="black"
                />
              );
            },
            tabBarActiveTintColor: "black",
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="AllBooks"
          component={AllBooksScreen}
          options={{
            title: "Explore Books",
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "book" : "book-outline"}
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color="black"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BooksDetails"
          component={BooksDetailsScreen}
          options={{
            title: "Book Info",
            headerRight: () => {
              return (
                <Ionicons name="bookmarks-outline" size={24} color="black" />
              );
            },
          }}
        />
        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayerScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
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
