import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import BooksListItem from "./components/BooksList/BooksListItem";
import { StatusBar } from "expo-status-bar";
import { supabase } from "./lib/supabase";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("books").select();
      console.log("loaded");

      setData(data);
    };
    fetchData();
  }, [setData]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Read A Book</Text>
      <StatusBar style="auto" />
      <View>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
