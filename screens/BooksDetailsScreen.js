import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import BooksDetails from "../components/BooksDetails/BooksDetails";
import { supabase } from "../lib/supabase";

const BooksDetailsScreen = ({ route }) => {
  const [audiobookData, setAudiobookData] = useState([]);

  useEffect(() => {
    const getAudioBooksData = async () => {
      const { data, error } = await supabase.storage
        .from("audiobooks")
        .list("Foolish Dictionary", {
          sortBy: { column: "name", order: "asc" },
        });

      setAudiobookData(data);
    };

    getAudioBooksData();
  }, []);

  useEffect(() => {
    const { data } = supabase.storage
      .from("audiobooks")
      .getPublicUrl(`Foolish Dictionary/${audiobookData[0].name}`);
    console.log(data);
  }, []);

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
      {audiobookData.map((item) => {
        return <Text key={item.id}>{item.name}</Text>;
      })}
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
