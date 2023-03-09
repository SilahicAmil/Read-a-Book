import { Text, View } from "react-native";

import BooksDetails from "../components/BooksDetails/BooksDetails";

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
        <BooksDetails />
      </View>
    </>
  );
};

export default BooksDetailsScreen;
