import { Button, Text, View } from "react-native";

import { useLayoutEffect } from "react";

const PurchaseBookScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <Button title="Go Back" onPress={() => navigation.goBack()} />;
      },
    });
  }, []);

  return (
    <View>
      <Text>Purchase Book</Text>
    </View>
  );
};

export default PurchaseBookScreen;
