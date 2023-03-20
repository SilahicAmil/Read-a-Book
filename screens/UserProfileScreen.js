import { ScrollView, StyleSheet, Text } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import UserFavoritesCard from "../components/UserProfile/UserFavoritesCard";
import UserHeader from "../components/UserProfile/UserHeader";
import { useContext } from "react";

const UserProfileScreen = ({}) => {
  const favoriteBookCtx = useContext(FavoritesContext);

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <UserHeader />
        <Text>Favorite Books:{favoriteBookCtx.bookNames}</Text>
        <UserFavoritesCard />
      </ScrollView>
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
