import { useState, useEffect } from "react";

const useCharacters = ({ url, resource, format }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      });
  }, [url, resource, format]);

  return [characters, isLoading];
};

export default useCharacters;
