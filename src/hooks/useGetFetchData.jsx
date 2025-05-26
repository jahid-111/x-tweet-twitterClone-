import { useEffect, useState } from "react";
import clientApi from "../../services/axiosAPI_Config";

export default function useGetFetchData(URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!URL || URL.includes("undefined")) return; // Skip if URL is invalid

    async function fetchData() {
      setIsLoading(true); // Start loading
      setIsError(false); // Reset error state

      try {
        const response = await clientApi.get(URL);
        setData(response.data); // Update data state
      } catch (error) {
        setIsError(true); // Handle errors
        console.error("Error fetching data:", error); // Optional for debugging
      } finally {
        setIsLoading(false); // End loading
      }
    }

    fetchData(); // Call the fetch function
  }, [URL]);

  return { isLoading, isError, data };
}
