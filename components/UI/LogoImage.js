import { Image, StyleSheet, View } from "react-native";

const LogoImage = ({}) => {
  return (
    <View>
      <Image
        alt="Read A Book Logo"
        source={require("../../assets/read-a-book-no-bg.png")}
        style={styles.image}
      />
    </View>
  );
};

export default LogoImage;

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 32,
    marginLeft: 2,
  },
});
