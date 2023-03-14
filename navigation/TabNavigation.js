import AllBooksScreen from "../screens/AllBooksScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import LogoImage from "../components/UI/LogoImage";
import UserProfileScreen from "../screens/UserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();
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

export default TabsNavigator;
