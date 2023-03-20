import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const FeaturedBook = ({ title, runtime, onPress }) => {
  return (
    <>
      <View style={styles.outerContainer}>
        <Text style={styles.featured}>Featured Book</Text>
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressed : null)}
          onPress={onPress}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1529589941132-43606325dfb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
            }}
            style={styles.image}
          />
          {/* Create this into custom component */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default FeaturedBook;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    padding: 8,
    height: 250,
    position: "relative",
    backgroundColor: "#FFF",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  featured: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "DMSerif-Display",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",

    backgroundColor: "#ccc",
    zIndex: 1,
    position: "absolute",
    opacity: 0.8,
    bottom: 0,
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.57,
    shadowRadius: 4.65,
    elevation: 8,
  },

  description: {
    fontFamily: "DMSerif-Display",
    fontWeight: "normal",
    fontSize: 24,
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  time: {
    fontFamily: "Kantumury-Pro",
    fontWeight: "normal",
    fontSize: 15,
    marginRight: 4,
  },
  listen: {
    marginLeft: 4,
    fontSize: 15,
    fontFamily: "Kantumury-Pro",
  },
  pressed: {
    opacity: 0.8,
  },
});
