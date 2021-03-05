import { useEffect, useState } from "react";

function useFetchApi(link) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoading(false);
          setItems(res.hotels);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [link]);

  return { error, isLoading, items };
}

export default useFetchApi;
