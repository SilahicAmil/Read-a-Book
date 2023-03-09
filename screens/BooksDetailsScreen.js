import { Text, View } from "react-native";

const BooksDetailsScreen = ({ route }) => {
  const {
    books_id,
    books_title,
    books_author_first_name,
    books_author_last_name,
    books_copyright_year,
    books_num_sections,
    books_total_time,
    books_description,
  } = route.params;
  console.log(books_id);
  return (
    <>
      <View>
        <Text>
          {
            (books_id,
            books_title,
            books_author_first_name,
            books_author_last_name,
            books_copyright_year,
            books_num_sections,
            books_total_time,
            books_description)
          }{" "}
        </Text>
      </View>
    </>
  );
};

export default BooksDetailsScreen;
