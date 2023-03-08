import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import BooksListItem from "../components/BooksList/BooksListItem";
import FeaturedBook from "../components/FeaturedBook/FeaturedBook";
import { StatusBar } from "expo-status-bar";
import { supabase } from "../lib/supabase";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("allbooks").select();
      console.log("loaded");

      setData(data.slice(0, 10));
    };
    fetchData();
  }, [setData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FeaturedBook title="Secret Garden" runtime="9:08:25" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popular Books</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <BooksListItem
              title={item.books_title}
              description={item.books_description}
            />
          );
        }}
        keyExtractor={(item) => item.books_id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontFamily: "DMSerif-Display",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "left",
    paddingHorizontal: 8,
  },
});
