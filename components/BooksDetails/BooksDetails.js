import { Button, Card } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BooksDetails = ({
  title,
  authorFirst,
  authorLast,
  released,
  sections,
  runtime,
  description,
}) => {
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Card.Image
          source={{
            uri: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.image}
        />

        <View>
          <Text>{title}</Text>
          <Text>
            By {authorFirst}&nbsp;{authorLast}
          </Text>
        </View>

        <View style={styles.basicInfo}>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>Realeased</Text>
            <Text>{released}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>Sections</Text>
            <Text>{sections}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>Runtime</Text>
            <Text>{runtime} HRs</Text>
          </Card>
        </View>

        <View>
          <Text>Description</Text>
          <Text>{description}</Text>
        </View>

        <View style={styles.actions}>
          <Button title="Play Audio" type="solid" />
        </View>
      </ScrollView>
    </>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FBF8F2",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "95%",
    margin: 8,
    borderRadius: 8,
    height: 200,
  },
  basicInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    borderColor: "#E3D4B5",
    borderRadius: 8,
  },
  cardText: {
    textAlign: "center",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    zIndex: 1,
  },
});
