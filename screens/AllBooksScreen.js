import { FlatList, StyleSheet, Text, View } from "react-native";

import BooksCard from "../components/AllBooks/BooksCard";
import ErrorItem from "../components/UI/ErrorItem";
import FilterableChips from "../components/AllBooks/FilterableChips";
import LoadingItem from "../components/UI/LoadingItem";
import useFetchData from "../hooks/useFetchData";
import { useState } from "react";

const AllBooksScreen = ({ navigation }) => {
  const { allData, isLoading, isError } = useFetchData();
  const [fiveHourData, setFiveHourData] = useState([]);

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

  // handle filtering here since data is here
  const filter5Hours = () => {
    const filteredData = allData.filter((book) => {
      return book.books_totaltimesecs <= 18000;
    });
    setFiveHourData(filteredData);
  };
  return (
    <>
      <View style={styles.container}>
        <FilterableChips onPressFilter5={filter5Hours} />
        <Text> Number of 0-5 hour books: {fiveHourData.length}</Text>
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
