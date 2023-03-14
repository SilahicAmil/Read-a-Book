import AllBooksScreen from "./screens/AllBooksScreen";
import AudioPlayerScreen from "./screens/AudioPlayerScreen";
import BooksDetailsScreen from "./screens/BooksDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import LogoImage from "./components/UI/LogoImage";
import { NavigationContainer } from "@react-navigation/native";
import UserProfileScreen from "./screens/UserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
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
            return <LogoImage />;
          },

          headerTitleAlign: "left",
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
            title: "Profile",
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
      <Stack.Navigator initialRouteName="TabHome">
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
