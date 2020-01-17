import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = url => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(loading);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setResponse(res);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return [response, error, loading];
};
