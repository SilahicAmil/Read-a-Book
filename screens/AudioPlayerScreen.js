import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import { Audio } from "expo-av";
import AudioItem from "../components/AudioPlayer/AudioItem";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { supabase } from "../lib/supabase";

const AudioPlayerScreen = ({ navigation, route }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);

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
      headerLeft: () => {
        return <Button title="Back" onPress={() => navigation.goBack()} />;
      },
      title: route.params.title,
    });
  }, []);

  const audioFileToPlayHandler = async (nameOfFile) => {
    Toast.show({
      type: "info",
      text1: "Loading Audio",
    });
    const { data } = supabase.storage
      .from("audiobooks")
      .getPublicUrl(`Foolish Dictionary/${nameOfFile}`);

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: 2,
    });

    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: data["publicUrl"] });
    setSound(sound);

    await sound.playAsync();
    setPlaying(true);
    Toast.show({
      type: "success",
      text1: "Playing Audio",
      visibilityTime: 3500,
      autoHide: true,
    });
  };

  useLayoutEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          setPlaying(false);
        }
      : undefined;
  }, [sound]);

  const stopPlayingAudioHandler = async () => {
    await sound.stopAsync();
    setPlaying(false);
  };

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

          <Toast />
        </View>
        <AudioPlayer
          playing={playing}
          title={route.params.title}
          onStop={stopPlayingAudioHandler}
        />
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
    backgroundColor: "white",
  },
  listContainer: {
    height: "65%",
    padding: 8,
    backgroundColor: "#FBF8F2",
  },
});
