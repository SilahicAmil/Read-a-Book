import { FlatList, StyleSheet, Text, View } from "react-native";

import BooksCard from "../components/AllBooks/BooksCard";
import useFetchData from "../hooks/useFetchData";

const AllBooksScreen = ({ route, navigation }) => {
  const { allData, isLoading, isError } = useFetchData();

  if (isLoading === true) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>0-5 Hours</Text>
          <Text>6-15 Hours</Text>
          <Text>16+ Hours</Text>
        </View>
        <FlatList
          data={allData}
          renderItem={({ item }) => {
            return (
              <BooksCard
                title={item.books_title}
                authorFirst={item.books_authors_first_name}
                authorLast={item.books_authors_last_name}
              />
            );
          }}
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
    margin: 4,
  },
});
