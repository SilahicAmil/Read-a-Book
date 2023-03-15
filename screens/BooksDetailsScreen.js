import { StyleSheet, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import BooksDetails from "../components/BooksDetails/BooksDetails";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../lib/supabase";

const BooksDetailsScreen = ({ route, navigation }) => {
  const [audiobookData, setAudiobookData] = useState([]);

  useEffect(() => {
    const getAudioBooksData = async () => {
      const { data, error } = await supabase.storage
        .from("audiobooks")
        .list("Foolish Dictionary", {
          sortBy: { column: "name", order: "asc" },
        });

      if (error) {
        return;
      }

      setAudiobookData(data);
    };

    getAudioBooksData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Ionicons name="bookmarks-outline" size={24} color="black" />;
      },
    });
  }, []);

  const {
    books_title,
    books_authors_first_name,
    books_authors_last_name,
    books_copyright_year,
    books_num_sections,
    books_totaltime,
    books_description,
  } = route.params;

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
    flex: 1,
  },
});
