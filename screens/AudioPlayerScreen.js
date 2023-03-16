import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import { Audio } from "expo-av";
import AudioItem from "../components/AudioPlayer/AudioItem";
import { supabase } from "../lib/supabase";

const AudioPlayerScreen = ({ navigation, route }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [sound, setSound] = useState();

  useEffect(() => {
    const fetchAudioFiles = async () => {
      const { data, error } = await supabase.storage
        .from("audiobooks")
        // update this to route.params.title
        .list("Foolish Dictionary", {
          sortBy: { column: "name", order: "asc" },
        });

      setAudioFiles(data);
    };
    fetchAudioFiles();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Go Back" onPress={() => navigation.goBack()} />;
      },
      title: route.params.title,
    });
  }, []);

  const audioFileToPlayHandler = async (nameOfFile) => {
    const { data } = supabase.storage
      .from("audiobooks")
      .getPublicUrl(`Foolish Dictionary/${nameOfFile}`);

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
    });

    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: data["publicUrl"] });
    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={audioFiles}
            renderItem={({ item, index }) => {
              return (
                <AudioItem
                  onPress={() => audioFileToPlayHandler(item.name)}
                  index={index}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
          <Text>Visual Audio Player Goes Here</Text>
        </View>
      </View>
    </>
  );
};

export default AudioPlayerScreen;

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  listContainer: {
    height: "50%",
    padding: 8,
  },
});
