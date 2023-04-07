import { StyleSheet, Text, View } from "react-native";

import { FAQ_DATA } from "../../data/FAQ-Data";
import { ListItem } from "@rneui/themed";
import { useState } from "react";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState();

  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.faqText}>FAQ:</Text>

        {FAQ_DATA.map((item) => {
          return (
            <ListItem.Accordion
              content={
                <>
                  <ListItem.Content>
                    <ListItem.Title style={styles.accordionTitle}>
                      {item.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </>
              }
              isExpanded={expanded === item.id}
              onPress={() => {
                setExpanded(expanded === item.id ? null : item.id);
              }}
              style={styles.accordion}
              key={item.id}
            >
              <ListItem key={item.id}>
                <ListItem.Content>
                  <ListItem.Subtitle style={styles.accordionAnswer}>
                    {item.answer}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </ListItem.Accordion>
          );
        })}
      </View>
    </>
  );
};

export default FAQAccordion;

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    backgroundColor: "#FBF8F2",
    flex: 1,
    marginBottom: 128,
  },
  faqText: {
    fontSize: 26,
    marginLeft: 12,
    fontFamily: "DMSerif-Display",
  },
  accordion: {
    marginTop: 12,
  },
  accordionTitle: {
    fontSize: 18,
    fontFamily: "DMSerif-Display",
  },
  accordionAnswer: {
    fontSize: 14,
    fontFamily: "Kantumury-Pro",
  },
});
