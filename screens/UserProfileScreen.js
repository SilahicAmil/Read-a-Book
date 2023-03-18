import { Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const UserProfileScreen = ({ route, navigation }) => {
  const favoriteBookCtx = useContext(FavoritesContext);
  console.log(favoriteBookCtx.bookNames);
  console.log(favoriteBookCtx.purchasedBookNames);

  return (
    <>
      <View>
        <Text>User Profile Screen</Text>
        <Text>Favorite Books:{favoriteBookCtx.bookNames}</Text>
        <Text>Purchased Books:{favoriteBookCtx.purchasedBookNames}</Text>
      </View>
    </>
  );
};

export default UserProfileScreen;
