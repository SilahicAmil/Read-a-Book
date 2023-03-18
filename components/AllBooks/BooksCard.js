import { Button, Card } from "@rneui/themed";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BooksCard = ({ imageUrl, title, authorFirst, authorLast, onPress }) => {
  return (
    <>
      <Card containerStyle={styles.rootContainer}>
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressed : null)}
          onPress={onPress}
        >
          <View style={styles.image}>
            <Card.Image
              source={{
                uri: "https://images.unsplash.com/photo-1529589941132-43606325dfb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
              }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Card.Title style={styles.title}>{title}</Card.Title>
              <Text style={styles.author}>
                By: {authorFirst}&nbsp;{authorLast}
              </Text>
            </View>

            <View>
              <View style={styles.actions}>
                <Button title="View More" onPress={onPress} color="#2F2F2F" />
              </View>
            </View>
          </View>
        </Pressable>
      </Card>
    </>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#F5EFE1",
    borderRadius: 8,
    width: "42%",
  },
  actions: {
    marginTop: 8,
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    borderRadius: 8,
  },
  title: {
    paddingTop: 8,
    textAlign: "left",
    marginBottom: 2,
    fontSize: 18,
    fontFamily: "DMSerif-Display",
  },
  author: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Kantumury-Pro",
    paddingTop: 8,
  },
  pressed: {
    opacity: 0.8,
  },
});
