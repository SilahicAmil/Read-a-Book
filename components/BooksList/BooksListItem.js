import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ListItem } from "@rneui/themed";

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
        <View style={styles.shadowContainer}>
          <Pressable
            onPress={onPress}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <ListItem containerStyle={styles.innerContainer}>
              <Image
                alt={title + "cover"}
                source={{
                  uri: "https://images.unsplash.com/photo-1528459105426-b9548367069b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80",
                }}
                style={styles.image}
              />
              <View>
                <ListItem.Content style={styles.contentContainer}>
                  <ListItem.Title>{title}</ListItem.Title>
                  <ListItem.Subtitle>
                    by {authorFirst}&nbsp;{authorLast}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Text style={styles.descriptionText}>
                  {description.slice(0, 125)}...
                </Text>
              </View>
            </ListItem>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default BooksListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 8,
    height: 100,
    display: "flex",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  shadowContainer: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 0.4,
    elevation: 12,
  },
  innerContainer: {
    backgroundColor: "#FBF8F2",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  image: {
    width: "20%",
    height: "100%",
    borderRadius: 8,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  descriptionText: {
    width: "38%",

    fontSize: 12,
    fontFamily: "Kantumury-Pro",
  },
  pressed: { opacity: 0.5 },
});
