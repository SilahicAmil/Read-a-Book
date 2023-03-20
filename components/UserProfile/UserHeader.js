import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "@rneui/themed";

const UserHeader = ({}) => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Avatar
          size={125}
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
          }}
        />
        <View>
          <Text style={styles.name}>Stacy Smith</Text>
          <Text style={styles.joined}>Joined 2023</Text>
        </View>
        <View style={styles.divider}></View>
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
  divider: {
    width: "95%",
    height: 16,
    backgroundColor: "#E3D4B5",
    marginTop: 12,
    borderRadius: 8,
  },
});
