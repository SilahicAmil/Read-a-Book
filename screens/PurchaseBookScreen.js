import { Button, Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import { useLayoutEffect } from "react";

const PurchaseBookScreen = ({ navigation, route }) => {
  const purchasedBookCtx = useContext(FavoritesContext);

  const bookIsPurchased = purchasedBookCtx.purchasedBookNames.includes(
    route.params.title
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <Button title="Go Back" onPress={() => navigation.goBack()} />;
      },
    });
  }, []);

  const purchaseHandler = () => {
    if (!bookIsPurchased) {
      purchasedBookCtx.purchaseBook(route.params.title);
    } else {
      return;
    }
  };

  return (
    <View>
      <Text>Purchase Book</Text>
      <Button title="Buy now" onPress={purchaseHandler} />
    </View>
  );
};

export default PurchaseBookScreen;
