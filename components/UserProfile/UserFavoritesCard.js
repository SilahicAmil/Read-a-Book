import { StyleSheet, View } from "react-native";

import { Card } from "@rneui/themed";

const UserFavoritesCard = ({ bookName }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.card}>
          <Card.Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <Card.Title style={styles.title}>{bookName}</Card.Title>
        </Card>
      </View>
    </View>
  );
};

export default UserFavoritesCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginBottom: 32,
  },
  cardContainer: {
    padding: 10,
    marginRight: 8,
    width: 175,
    height: 300,
    gap: 12,
  },
  card: {
    padding: 5,
    margin: 8,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    borderColor: "rgba(000, 000, 000, .6)",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 6,
  },
  image: {
    height: "90%",
    width: "100%",
    borderRadius: 6,
  },
  title: {
    fontSize: 12,
    fontFamily: "Kantumury-Pro",
    color: "black",
  },
});
