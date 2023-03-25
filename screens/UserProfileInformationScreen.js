import { Button } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import UserInformation from "../components/UserProfile/UserInformation";
import { View } from "react-native";

const UserProfileInformationScreen = ({ navigation }) => {
  return (
    <View>
      <UserInformation />
      <Toast />
      <Button
        title="Submit"
        onPress={() =>
          Toast.show({
            type: "success",
            text1: "Success",
            visibilityTime: 3500,
            autoHide: true,
          })
        }
      />
    </View>
  );
};

export default UserProfileInformationScreen;
