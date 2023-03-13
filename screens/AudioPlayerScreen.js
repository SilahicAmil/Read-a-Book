import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

const AudioPlayerScreen = ({ navigation, route }) => {
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      const { data, error } = await supabase.storage
        .from("audiobooks")
        // update this to route.params.title
        .list("Foolish Dictionary", {
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        });
      setAudioFiles(data);
    };
    fetchAudioFiles();
  }, []);

  return (
    <>
      {audioFiles.map((item) => {
        return <Text key={item.id}>{item.name}</Text>;
      })}
      <View>
        <Text>Audio Player Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

export default AudioPlayerScreen;
