import { ScrollView, StyleSheet, Text, View } from "react-native";

import FAQAccordion from "../components/UserProfile/FAQAccordion";
import { FavoritesContext } from "../store/context/favorites-context";
import { FlatList } from "react-native-gesture-handler";
import UserFavoritesCard from "../components/UserProfile/UserFavoritesCard";
import UserHeader from "../components/UserProfile/UserHeader";
import { useContext } from "react";

const UserProfileScreen = ({}) => {
  const favoriteBookCtx = useContext(FavoritesContext);
  const books = favoriteBookCtx.bookNames;

  return (
    <View style={styles.rootContainer}>
      <UserHeader />
      <Text style={styles.title}>Favorite Books:</Text>
      <ScrollView>
        {books.length !== 0 ? (
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
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyContainerText}>No Favorite Books :(</Text>
          </View>
        )}

        <FAQAccordion />
      </ScrollView>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    backgroundColor: "#FBF8F2",
    height: "100%",
    flex: 1,
  },
  emptyContainer: {
    height: 320,
    display: "flex",
    justifyContent: "center",
  },
  emptyContainerText: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: 26,
    fontFamily: "DMSerif-Display",
    marginLeft: 12,
  },
});
