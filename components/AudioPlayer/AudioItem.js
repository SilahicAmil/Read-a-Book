import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const AudioItem = ({ onPress, index }) => {
  return (
    <View style={styles.actionContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : styles.action)}
      >
        <Text style={styles.actionText}>{`Play Section ${index + 1}`}</Text>
      </Pressable>
    </View>
  );
};
export default AudioItem;

const styles = StyleSheet.create({
  actionContainer: {
    display: "flex",
    height: 64,
    padding: 8,
    flex: 1,
  },
  action: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  actionText: {
    fontSize: 18,
    fontFamily: "Kantumury-Pro",
    fontWeight: "bold",
    textAlign: "left",
    marginHorizontal: 12,
  },
  pressed: {
    opacity: 0.8,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
