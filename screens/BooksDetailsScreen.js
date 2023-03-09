import { Text, View } from "react-native";

const BooksDetailsScreen = ({ route }) => {
  const {
    books_id,
    books_title,
    books_authors_first_name,
    books_authors_last_name,
    books_copyright_year,
    books_num_sections,
    books_totaltime,
    books_description,
  } = route.params;
  console.log(books_id);
  return (
    <>
      <View>
        <Text>id{books_id}</Text>
        <Text>title{books_title}</Text>
        <Text>first{books_authors_first_name}</Text>
        <Text>last{books_authors_last_name}</Text>
        <Text>copy{books_copyright_year}</Text>
        <Text>sect{books_num_sections}</Text>
        <Text>time{books_totaltime}</Text>
        <Text>desc{books_description}</Text>
      </View>
    </>
  );
};

export default BooksDetailsScreen;
