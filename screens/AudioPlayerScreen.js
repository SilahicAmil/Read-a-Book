import { Button, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

import LoadingItem from "../components/UI/LoadingItem";
import { supabase } from "../lib/supabase";

const AudioPlayerScreen = ({ navigation, route }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Go Back" onPress={() => navigation.goBack()} />;
      },
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingItem />
      ) : (
        audioFiles.map((item) => {
          return <Text key={item.id}>{item.name}</Text>;
        })
      )}

      <View>
        <Text>Audio Player Screen</Text>
      </View>
    </>
  );
};

export default AudioPlayerScreen;
