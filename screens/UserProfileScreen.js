import { Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const UserProfileScreen = ({ route, navigation }) => {
  const favoriteBookCtx = useContext(FavoritesContext);
  console.log(favoriteBookCtx.bookNames);

  return (
    <>
      <View>
        <Text>User Profile Screen</Text>
        <Text>{favoriteBookCtx.bookNames}</Text>
      </View>
    </>
  );
};

export default UserProfileScreen;
