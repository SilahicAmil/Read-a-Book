import { StyleSheet, View } from "react-native";

import { Chip } from "@rneui/themed";

const FilterableChips = ({ onPressFilter5 }) => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Chip
          title="0-5 hrs"
          type="outline"
          icon={{
            name: "clock-o",
            type: "font-awesome",
            size: 20,
            color: "black",
          }}
          onPress={onPressFilter5}
        />
        <Chip
          title="6-15 hrs"
          type="outline"
          icon={{
            name: "clock-o",
            type: "font-awesome",
            size: 20,
            color: "black",
          }}
        />
        <Chip
          title="15+ hrs"
          type="outline"
          icon={{
            name: "clock-o",
            type: "font-awesome",
            size: 20,
            color: "black",
          }}
        />
      </View>
    </>
  );
};

export default FilterableChips;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
