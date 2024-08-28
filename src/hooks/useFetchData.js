import { useEffect, useState } from "react";
import API_URL from "@/utils/config";

export const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/${endpoint}/all`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [endpoint]);

  return data;
};
