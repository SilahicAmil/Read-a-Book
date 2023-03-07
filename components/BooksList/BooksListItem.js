import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BooksListItem = ({ title, description }) => {
  const itemPressedHandler = () => {
    console.log("pressed");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Pressable
          onPress={itemPressedHandler}
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
              <Text>{title}</Text>
              <Text style={styles.description}>
                {description.slice(0, 175) + "..."}
              </Text>
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
    display: "flex",
    padding: 8,
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
  },
  pressed: { opacity: 0.5 },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  description: {
    fontSize: 12,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 4,
  },
});
