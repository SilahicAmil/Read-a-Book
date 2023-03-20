import AudioPlayerScreen from "./screens/AudioPlayerScreen";
import BooksDetailsScreen from "./screens/BooksDetailsScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import { NavigationContainer } from "@react-navigation/native";
import PurchaseBookScreen from "./screens/PurchaseBookScreen";
import TabsNavigator from "./navigation/TabNavigation";
import UserProfileInformationScreen from "./screens/UserProfileInformationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMSerif-Display": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
    "Kantumury-Pro": require("./assets/fonts/KantumruyPro-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabHome">
          <Stack.Screen
            name="Home"
            component={TabsNavigator}
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
          <Stack.Screen
            name="PurchaseBook"
            component={PurchaseBookScreen}
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="UserProfileInformation"
            component={UserProfileInformationScreen}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}
