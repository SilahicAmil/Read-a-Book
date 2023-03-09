import { Button, Card } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

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
      <View>
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
          <Card>
            <Text>Realeased</Text>
            <Text>{released}</Text>
          </Card>
          <Card>
            <Text>Sections</Text>
            <Text>{sections}</Text>
          </Card>
          <Card>
            <Text>Total Runtime</Text>
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
      </View>
    </>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  image: {
    margin: 8,
    borderRadius: 8,
    height: 200,
  },
  basicInfo: {
    display: "flex",
    flexDirection: "row",
    width: 300,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
  },
});
