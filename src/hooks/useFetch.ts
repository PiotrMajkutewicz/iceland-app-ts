import { useState, useEffect } from "react";
import axios from "axios";

interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError("");

    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        setError("");
        res.data && setData(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError("An error occurred");
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
};
