import { Button, FlatList, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import { supabase } from "../lib/supabase";

const AudioPlayerScreen = ({ navigation, route }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [audioFileLink, setAudioFileLink] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchAudioFiles = async () => {
      const { data, error } = await supabase.storage
        .from("audiobooks")
        // update this to route.params.title
        .list("Foolish Dictionary", {
          sortBy: { column: "name", order: "asc" },
        });

      setAudioFiles(data);
      setIsLoading(false);
    };
    fetchAudioFiles();
  }, []);

  const audioFileToPlayHandler = async (nameOfFile) => {
    const { data } = supabase.storage
      .from("audiobooks")
      .getPublicUrl(`Foolish Dictionary/${nameOfFile}`);
    setAudioFileLink(data["publicUrl"]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Go Back" onPress={() => navigation.goBack()} />;
      },
      title: route.params.title,
    });
  }, []);

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
