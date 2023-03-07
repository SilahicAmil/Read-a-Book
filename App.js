import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";

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

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.books_title}</Text>;
        }}
        keyExtractor={(item) => item.books_id}
        numColumns={2}
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
