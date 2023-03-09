import { FlatList, Text, View } from "react-native";

import useFetchData from "../hooks/useFetchData";

const AllBooksScreen = ({ route, navigation }) => {
  const { allData, isLoading, isError } = useFetchData();

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
