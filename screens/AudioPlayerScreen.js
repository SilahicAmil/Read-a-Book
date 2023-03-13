import { Button, Text, View } from "react-native";

const AudioPlayerScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>Audio Player Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

export default AudioPlayerScreen;
