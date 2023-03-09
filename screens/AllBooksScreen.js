import { FlatList, Text, View } from "react-native";

import useFetch from "../hooks/useFetchData";

const AllBooksScreen = ({ route, navigation }) => {
  const { allData, isLoading, isError } = useFetch();

  console.log("route", route);
  console.log("nav", navigation);
  return (
    <>
      <View>
        <FlatList
          data={allData}
          renderItem={({ item }) => {
            return <Text>{item.books_title}</Text>;
          }}
          keyExtractor={(item) => item.books_id}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default AllBooksScreen;
