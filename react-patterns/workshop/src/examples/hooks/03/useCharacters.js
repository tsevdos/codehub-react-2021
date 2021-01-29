import { useState, useEffect } from "react";

const useCharacters = ({ url, resource, format }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [url, resource, format]);

  return characters;
};

export default useCharacters;
