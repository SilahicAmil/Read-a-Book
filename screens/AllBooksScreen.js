import { FlatList, StyleSheet, Text, View } from "react-native";

import BooksCard from "../components/AllBooks/BooksCard";
import ErrorItem from "../components/UI/ErrorItem";
import FilterableChips from "../components/AllBooks/FilterableChips";
import LoadingItem from "../components/UI/LoadingItem";
import useFetchData from "../hooks/useFetchData";

const AllBooksScreen = ({ navigation }) => {
  const { allData, isLoading, isError } = useFetchData();

  if (isError === true) {
    return <ErrorItem />;
  }

  if (isLoading === true) {
    return <LoadingItem />;
  }

  const renderBooksCard = (itemData) => {
    const bookPressedHandler = () => {
      navigation.navigate("BooksDetails", {
        ...itemData.item,
      });
    };
    return (
      <BooksCard
        title={itemData.item.books_title}
        authorFirst={itemData.item.books_authors_first_name}
        authorLast={itemData.item.books_authors_last_name}
        onPress={bookPressedHandler}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FilterableChips />
        <FlatList
          data={allData}
          renderItem={renderBooksCard}
          numColumns={2}
          keyExtractor={(item) => item.books_id}
        />
      </View>
    </>
  );
};

export default AllBooksScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 8,
    flex: 1,
    backgroundColor: "#FBF8F2",
  },
});
