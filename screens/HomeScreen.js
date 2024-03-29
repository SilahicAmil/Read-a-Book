import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import BooksListItem from "../components/BooksList/BooksListItem";
import ErrorItem from "../components/UI/ErrorItem";
import FeaturedBook from "../components/FeaturedBook/FeaturedBook";
import LoadingItem from "../components/UI/LoadingItem";
import { StatusBar } from "expo-status-bar";
import useFetchData from "../hooks/useFetchData";

const HomeScreen = ({ navigation }) => {
  const { sampleData, allData, isLoading, isError } = useFetchData();

  if (isError === true) {
    return <ErrorItem />;
  }

  if (isLoading === true) {
    return <LoadingItem />;
  }

  const renderBookListItem = (itemData) => {
    const bookPressedHandler = () => {
      navigation.navigate("BooksDetails", {
        ...itemData.item,
      });
    };

    return (
      <BooksListItem
        title={itemData.item.books_title}
        authorFirst={itemData.item.books_authors_first_name}
        authorLast={itemData.item.books_authors_last_name}
        description={itemData.item.books_description}
        ratings={itemData.item.ratings_numbers}
        onPress={bookPressedHandler}
      />
    );
  };

  const featureBookHandler = () => {
    navigation.navigate("BooksDetails", {
      ...allData[6],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FeaturedBook onPress={featureBookHandler} title="Canterville Ghost" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popular Books</Text>
      </View>
      <FlatList
        data={sampleData}
        renderItem={renderBookListItem}
        keyExtractor={(item) => item.books_id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontFamily: "DMSerif-Display",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "left",
    paddingHorizontal: 8,
  },
});
