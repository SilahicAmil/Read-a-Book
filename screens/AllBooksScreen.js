import { FlatList, StyleSheet, Text, View } from "react-native";

import BooksCard from "../components/AllBooks/BooksCard";
import FilteredChips from "../components/AllBooks/FilteredChips";
import useFetchData from "../hooks/useFetchData";

const AllBooksScreen = ({ route, navigation }) => {
  const { allData, isLoading, isError } = useFetchData();

  if (isLoading === true) {
    return <Text>Loading...</Text>;
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
        <FilteredChips />
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
  },
});
