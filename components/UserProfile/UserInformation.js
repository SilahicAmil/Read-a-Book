import { Input } from "@rneui/themed";
import { View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const UserInformation = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "User Information",
    });
  }, []);

  return (
    <>
      <View>
        <Input placeholder="Stacy Smith" />
        <Input placeholder="test@test.com" />

        <View>
          <Input placeholder="" />
        </View>
      </View>
    </>
  );
};

export default UserInformation;
