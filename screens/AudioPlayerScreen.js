import { Button, FlatList, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import { Audio } from "expo-av";
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
      <View>
        <Text>Audio Player Screen</Text>
        <FlatList
          data={audioFiles}
          renderItem={({ item }) => {
            return (
              <Button
                title={item.name}
                onPress={() => audioFileToPlayHandler(item.name)}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default AudioPlayerScreen;
