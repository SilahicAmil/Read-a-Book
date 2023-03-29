import {
  Image,
  Platform,
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
  ratings,
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

              {Platform.OS === "ios" ? (
                <View style={styles.ratingsContainer}>
                  <Text>
                    <>
                      <AirbnbRating
                        isDisabled={true}
                        reviews={false}
                        count={5}
                        defaultRating={4}
                        size={15}
                      />

                      <View style={styles.innerRatingsContainer}>
                        <Text style={styles.ratingsText}>
                          {ratings} Ratings
                        </Text>
                      </View>
                    </>
                  </Text>
                </View>
              ) : null}
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
    height: 140,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 6,
    padding: Platform.OS === "android" ? 12 : 16,
    width: "100%",
    gap: 6,
    backgroundColor: "#FBF8F2",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 12,
  },
  pressed: { opacity: 0.5 },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  ratingsContainer: {
    marginTop: -30,
    marginBottom: 6,
    height: "55%",
    justifyContent: "center",
  },
  innerRatingsContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ratingsText: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: "Kantumury-Pro",
  },
  title: {
    fontFamily: "DMSerif-Display",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
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
