import { useEffect, useState } from "react";
import { AxiosInstance } from "axios";

export const useAutoFetch = <T>(
  api: AxiosInstance,
  config: string = "",
  url: string = ""
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get<T>(url, {
          ...JSON.parse(config),
          signal: controller.signal,
        });

        setData(data);
        setError(undefined);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [config, url, api]);

  return { data, error, loading };
};
