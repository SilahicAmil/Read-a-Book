import { ScrollView, StyleSheet, Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { FlatList } from "react-native-gesture-handler";
import UserFavoritesCard from "../components/UserProfile/UserFavoritesCard";
import UserHeader from "../components/UserProfile/UserHeader";
import { useContext } from "react";

const UserProfileScreen = ({}) => {
  const favoriteBookCtx = useContext(FavoritesContext);
  const books = favoriteBookCtx.bookNames;

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <UserHeader />
        <Text style={styles.title}>Favorite Books:</Text>
        <FlatList
          data={books}
          renderItem={({ item }) => {
            return <UserFavoritesCard bookName={item} />;
          }}
          key={(item) => item}
          nestedScrollEnabled
          rootContainer
          horizontal
        />
        <View>
          <Text>FAQ Accordion Down Here (or something similiar)</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FBF8F2",
  },
  title: {
    fontSize: 26,
    fontFamily: "DMSerif-Display",
    marginLeft: 12,
  },
});
