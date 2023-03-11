import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingItem = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
