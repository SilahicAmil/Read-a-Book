import { StyleSheet, Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import UserHeader from "../components/UserProfile/UserHeader";
import { useContext } from "react";

const UserProfileScreen = ({}) => {
  const favoriteBookCtx = useContext(FavoritesContext);

  return (
    <>
      <View style={styles.rootContainer}>
        <UserHeader />
        <Text>Favorite Books:{favoriteBookCtx.bookNames}</Text>
        <Text>
          Donations to: (only user can see this no one else)
          {favoriteBookCtx.purchasedBookNames}
        </Text>
      </View>
    </>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FBF8F2",
    height: "100%",
  },
});
