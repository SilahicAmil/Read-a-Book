import { Button, Card, Icon } from "@rneui/themed";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const BooksDetails = ({
  title,
  authorFirst,
  authorLast,
  released,
  sections,
  runtime,
  description,
}) => {
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
        </View>

        <View style={styles.basicInfo}>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardTextHeader}>Realeased</Text>
            <Text style={styles.cardText}>{released}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardTextHeader}>Sections</Text>
            <Text style={styles.cardText}>{sections}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardTextHeader}>Runtime</Text>
            <Text style={styles.cardText}>{runtime} hr(s)</Text>
          </Card>
        </View>
        <ScrollView style={styles.descriptionContainer}>
          <View style={styles.descriptionInnerContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </ScrollView>
        <View style={styles.actions}>
          <Button
            title="Purchase Book"
            type="solid"
            icon={<Ionicons name="book" size={24} color="black" />}
            titleStyle={{
              fontSize: 16,
              fontFamily: "Kantumury-Pro",
              color: "#2F2F2F",
              marginLeft: 4,
            }}
            buttonStyle={{
              backgroundColor: "#BFA054",
              height: "100%",
              borderRadius: 6,
            }}
            accessibilityLabel="Purchase selected Audiobook"
          />
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
          />
        </View>
      </View>
    </>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "white",

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
  image: {
    width: "95%",
    margin: 8,
    borderRadius: 8,
    height: 200,
  },
  basicInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    borderColor: "#E3D4B5",
    borderRadius: 8,
  },
  cardTextHeader: {
    textAlign: "center",
    color: "#858585",
  },
  cardText: {
    textAlign: "center",
    color: "#2F2F2F",
  },
  descriptionContainer: {
    padding: 12,
    display: "flex",
    flex: 1,
  },
  descriptionInnerContainer: {
    height: "100%",
    width: "100%",
  },
  descriptionTitle: {
    fontSize: 16,
    fontFamily: "DMSerif-Display",
    color: "#2F2F2F",
    letterSpacing: 1,
    marginBottom: 8,
  },
  descriptionText: {
    letterSpacing: 1.1,
    justifyContent: "center",
    marginBottom: 16,
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
