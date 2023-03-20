import { Text, View } from "react-native";

import { Button } from "react-native";

const UserProfileInformationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>User Information Screen</Text>
      <Button title="done" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default UserProfileInformationScreen;
