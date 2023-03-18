import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

const useFetchData = () => {
  const [sampleData, setSampleData] = useState();
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from("allbooks").select();
        console.log("loaded");

        setSampleData(data.slice(0, 10));
        setAllData(data);

        if (error) {
          setIsLoading(false);
          setIsError(true);
        }

        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return { sampleData, allData, isLoading, isError };
};

export default useFetchData;
