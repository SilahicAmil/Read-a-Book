import { Pressable, StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#E3D4B5",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 18,
    fontFamily: "Kantumury-Pro",
    fontWeight: "bold",
    marginLeft: 12,
  },

  pressed: {
    opacity: 0.6,
    backgroundColor: "#E3D4B5",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
