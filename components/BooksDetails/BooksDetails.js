import { Button, Card } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

const BooksDetails = ({ title }) => {
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
          <Text>The Homeric Hymns</Text>
          <Text>By Michael Curdden</Text>
        </View>
        <View style={styles.basicInfo}>
          <Card>
            <Text>Realeased</Text>
            <Text>2021</Text>
          </Card>
          <Card>
            <Text>Sections</Text>
            <Text>32</Text>
          </Card>
          <Card>
            <Text>Total Runtime</Text>
            <Text>49:08:35 HRs</Text>
          </Card>
        </View>
        <View>
          <Text>Description</Text>
        </View>

        <View style={styles.actions}>
          <Button title="Play Audio" type="solud" />
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
