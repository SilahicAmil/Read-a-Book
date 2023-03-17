import { Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const UserProfileScreen = ({ route, navigation }) => {
  console.log(route);
  return (
    <>
      <View>
        <Text>User Profile Screen</Text>
      </View>
    </>
  );
};

export default UserProfileScreen;
