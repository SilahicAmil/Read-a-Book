import { StyleSheet, Text, View } from "react-native";

import { Card } from "@rneui/themed";

const BooksDetailsInfo = ({ released, sections, total }) => {
  const time = total / 3600;
  return (
    <View style={styles.basicInfo}>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTextHeader}>Realeased</Text>
        <Text style={styles.cardText}>{released}</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTextHeader}>Sections</Text>
        <Text style={styles.cardText}>{sections}</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTextHeader}>Runtime</Text>
        <Text style={styles.cardText}>{time.toFixed(2)} hr(s)</Text>
      </Card>
    </View>
  );
};

export default BooksDetailsInfo;

const styles = StyleSheet.create({
  basicInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    borderColor: "#E3D4B5",
    backgroundColor: "white",
    borderRadius: 8,
  },
  cardTextHeader: {
    textAlign: "center",
    color: "#858585",
  },
  cardText: {
    textAlign: "center",
    color: "#2F2F2F",
  },
});
