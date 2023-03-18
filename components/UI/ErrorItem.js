import { Button, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const ErrorItem = ({}) => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Button
          title="Go To Home Page"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </>
  );
};

export default ErrorItem;
