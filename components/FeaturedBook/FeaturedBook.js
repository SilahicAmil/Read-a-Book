import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const FeaturedBook = ({ title, runtime }) => {
  const featuredBookHandler = () => {
    console.log("featured book");
  };
  return (
    <>
      <View style={styles.outerContainer}>
        <Text style={styles.featured}>Featured Book</Text>
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressed : null)}
          onPress={featuredBookHandler}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1529589941132-43606325dfb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
            }}
            style={styles.image}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{title}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>
                <AntDesign
                  name="playcircleo"
                  size={16}
                  color="black"
                  style={styles.icon}
                />
                &nbsp;
                {runtime}
              </Text>
            </View>
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
    height: 300,
    display: "inline",
    position: "relative",
    backgroundColor: "white",
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
    textAlign: "left",
    fontFamily: "DMSerif-Display",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "20%",
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
  },

  description: {
    fontFamily: "DMSerif-Display",
    fontWeight: "normal",
    fontSize: 24,
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontFamily: "DMSerif-Display",
    fontWeight: "normal",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.8,
  },
});
