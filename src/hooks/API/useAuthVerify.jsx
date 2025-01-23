import { useState, useEffect } from "react";
import axios from "axios";
import clientApi from "../../../services/axiosAPI_Config";

export default function useAuthVerify(URL) {
  const [authData, setAuthData] = useState([]);
  useEffect(() => {
    const verifyToken = async () => {
      const response = await clientApi.get(URL);
      setAuthData(response.data);

      //   console.log(response);
    };

    verifyToken();
  }, [URL]);

  return { authData }; // Return the status, loading, and error
}
