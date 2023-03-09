import { StyleSheet, Text, View } from "react-native";

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
      <View style={styles.rootContainer}>
        <BooksDetails
          title={books_title}
          authorFirst={books_authors_first_name}
          authorLast={books_authors_last_name}
          released={books_copyright_year}
          sections={books_num_sections}
          runtime={books_totaltime}
          description={books_description}
        />
      </View>
    </>
  );
};

export default BooksDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "black",
  },
});
