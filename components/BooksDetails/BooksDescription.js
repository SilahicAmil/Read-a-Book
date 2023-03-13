import { ScrollView, StyleSheet, Text, View } from "react-native";

const BooksDescription = ({ description }) => {
  return (
    <ScrollView style={styles.descriptionContainer}>
      <View style={styles.descriptionInnerContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default BooksDescription;

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 12,
    display: "flex",
    flex: 1,
  },
  descriptionInnerContainer: {
    height: "100%",
    width: "100%",
  },
  descriptionTitle: {
    fontSize: 16,
    fontFamily: "DMSerif-Display",
    color: "#2F2F2F",
    letterSpacing: 1,
    marginBottom: 8,
  },
  descriptionText: {
    letterSpacing: 1.1,
    justifyContent: "center",
    marginBottom: 16,
  },
});
