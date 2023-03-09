import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

const BooksCard = ({ imageUrl, title, authorFirst, authorLast }) => {
  return (
    <>
      <Pressable style={({ pressed }) => (pressed ? styles.pressed : null)}>
        <View style={styles.rootContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.image}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1529589941132-43606325dfb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
                }}
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>
                  By: {authorFirst}&nbsp;{authorLast}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  rootContainer: {
    width: 200,
    height: 400,
    margin: 8,
    backgroundColor: "#F5EFE1",
    display: "flex",
    borderRadius: 8,
  },
  innerContainer: {
    display: "flex",
    padding: 4,
  },
  image: {
    width: "100%",
    height: "90%",
    borderRadius: 8,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    paddingTop: 8,
    textAlign: "left",
    fontSize: 18,
    fontFamily: "DMSerif-Display",
    width: "100%",
  },
  author: {
    fontSize: 12,
    fontFamily: "Kantumury-Pro",
    paddingTop: 8,
  },
  pressed: {
    opacity: 0.8,
  },
});
