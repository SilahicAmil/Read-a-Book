import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AirbnbRating } from "@rneui/themed";

const BooksListItem = ({
  title,
  authorFirst,
  authorLast,
  onPress,
  description,
}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => (pressed ? styles.pressed : null)}
        >
          <View style={styles.innerContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              alt={title}
              style={styles.image}
            />

            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.author}>
                {authorFirst} &nbsp;
                {authorLast}
              </Text>
              <Text style={styles.description}>
                {description.slice(0, 120)}...
              </Text>

              <View style={styles.ratingsContainer}>
                <Text>
                  <AirbnbRating
                    isDisabled={true}
                    reviews={false}
                    count={5}
                    defaultRating={4}
                    size={15}
                  />
                  <View style={styles.innerRatingsContainer}>
                    <Text style={styles.ratingsText}>40 Ratings</Text>
                  </View>
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default BooksListItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 8,
    padding: 2,
    width: "100%",
    gap: 8,
    backgroundColor: "#FBF8F2",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  },
  pressed: { opacity: 0.5 },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  ratingsContainer: {
    marginTop: -24,
    height: 64,
    justifyContent: "center",
    // alignItems: "center",
  },
  innerRatingsContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ratingsText: {
    fontSize: 12,
    marginLeft: 12,
    fontFamily: "Kantumury-Pro",
  },
  title: {
    fontFamily: "DMSerif-Display",
    fontSize: 18,
    fontWeight: "bold",
  },

  author: {
    fontSize: 12,
    fontFamily: "Kantumury-Pro",

    marginBottom: 6,
  },
  description: {
    fontSize: 10,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 4,
  },
});
