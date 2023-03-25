import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const AudioPlayer = ({ playing, title, onStop }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>
        Currently Playing: {playing ? title : null}
      </Text>
      <Pressable style={styles.innerContainer} onPress={onStop}>
        <Ionicons name="play-back" size={32} color="black" />
        {playing ? (
          <Ionicons name="pause" size={64} color="black" />
        ) : (
          <Ionicons name="play" size={64} color="black" />
        )}
        <Ionicons name="play-forward" size={32} color="black" />
      </Pressable>
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  innerContainer: {
    height: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    fontSize: 18,
    fontFamily: "DMSerif-Display",
    textAlign: "center",
  },
});
