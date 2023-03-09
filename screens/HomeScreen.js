import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import BooksListItem from "../components/BooksList/BooksListItem";
import FeaturedBook from "../components/FeaturedBook/FeaturedBook";
import { StatusBar } from "expo-status-bar";
import useFetchData from "../hooks/useFetchData";

const HomeScreen = ({ route, navigation }) => {
  const { sampleData, isLoading, isError } = useFetchData();

  if (isLoading === true) {
    // can use setTimeout so it loads for like 3 seconds minimum
    return <Text>Loading...</Text>;
  }

  if (isError === true) {
    // can use setTimeout eventually to reload the whole app after lik 3-4 seconds
    return <Text>Error!</Text>;
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
        description={itemData.item.books_description}
        onPress={bookPressedHandler}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FeaturedBook title="Secret Garden" runtime="9:08:25" />
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
    backgroundColor: "#fff",
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
