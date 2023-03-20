import { FlatList, StyleSheet, Text, View } from "react-native";

import { Avatar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DUMMY_DATA = [
  {
    name: "add",
  },
  {
    name: "add-circle",
  },
  {
    name: "add-circle-outline",
  },
  {
    name: "add-circle-sharp",
  },
  {
    name: "add-circle-sharp",
  },
  {
    name: "add-circle-sharp",
  },
  {
    name: "add-circle-sharp",
  },
  {
    name: "add-circle-sharp",
  },
  {
    name: "add-circle-sharp",
  },
];

const UserHeader = ({}) => {
  const navigaton = useNavigation();
  return (
    <>
      <View style={styles.rootContainer}>
        <Avatar
          size={130}
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
          }}
        >
          <Avatar.Accessory
            size={32}
            style={styles.avatarIcon}
            onPress={() => navigaton.navigate("UserProfileInformation")}
          />
        </Avatar>
        <View>
          <Text style={styles.name}>Stacy Smith</Text>
          <Text style={styles.joined}>Joined 2023</Text>
        </View>
        <View style={styles.badgesContainer}>
          <View>
            <FlatList
              data={DUMMY_DATA}
              renderItem={({ item }) => {
                return <Ionicons name={item.name} size={24} color="black" />;
              }}
              horizontal
              contentContainerStyle={styles.badges}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
    backgroundColor: "#FBF8F2",
  },
  avatarIcon: {
    marginRight: 4,
    marginBottom: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: "DMSerif-Display",
    textAlign: "center",
  },
  joined: {
    fontSize: 14,
    fontFamily: "Kantumury-Pro",
    textAlign: "center",
  },
  badgesContainer: {
    display: "flex",
    width: "95%",
    height: 42,
    backgroundColor: "#E3D4B5",
    marginTop: 12,
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
    justifyContent: "center",
  },
  badges: {
    gap: 16,
    marginHorizontal: 8,
  },
});
