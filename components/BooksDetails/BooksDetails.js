import { Button, Card } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

import { AirbnbRating } from "@rneui/themed";
import BooksDescription from "./BooksDescription";
import BooksDetailsInfo from "./BooksDetailsInfo";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BooksDetails = ({
  title,
  authorFirst,
  authorLast,
  released,
  sections,
  description,
  total,
  ratings,
}) => {
  const navigation = useNavigation();
  const audioPlayerHandler = () => {
    navigation.navigate("AudioPlayer", { title });
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <Card.Image
          source={{
            uri: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.image}
        />

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>
            By {authorFirst}&nbsp;{authorLast}
          </Text>
          <View style={styles.ratingsContainer}>
            <AirbnbRating size={18} count={4} reviews="" style={styles.stars} />
            <Text style={styles.ratings}>{ratings} Ratings</Text>
          </View>
        </View>

        <BooksDetailsInfo
          sections={sections}
          released={released}
          total={total}
        />

        <BooksDescription description={description} />
        <View style={styles.actionsContainer}>
          <View style={styles.actions}>
            {/* Create a custom component for this maybe */}
            <Button
              accessibilityLabel="Play Audio for the Audiobook"
              title="Play Audio"
              icon={
                <Ionicons name="play-circle-outline" size={24} color="white" />
              }
              titleStyle={{
                fontSize: 16,
                fontFamily: "Kantumury-Pro",
                marginLeft: 4,
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: "#2F2F2F",
                height: "100%",
                borderRadius: 6,
              }}
              onPress={audioPlayerHandler}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#fdfcfb",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  headerContainer: {
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: "DMSerif-Display",
    color: "#2F2F2F",
  },
  author: {
    fontSize: 16,
    fontFamily: "Kantumury-Pro",
    color: "#858585",
  },
  ratings: {
    fontSize: 14,
    marginHorizontal: 2,
    fontFamily: "Kantumury-Pro",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "center",
  },
  image: {
    width: "95%",
    margin: 8,
    borderRadius: 8,
    height: 200,
  },
  actionsContainer: {
    height: "15%",
    backgroundColor: "white",
  },
  ratingsContainer: {
    display: "flex",
    flexDirection: "row",
    height: 24,
    alignItems: "center",
  },
  stars: {
    padding: 0,
    alignItems: "center",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 48,
    marginTop: 16,
  },
});
