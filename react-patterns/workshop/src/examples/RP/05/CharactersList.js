import { useState, useEffect } from "react";

const CharactersList = ({ url, resource, format, children }) => {
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

  return children(characters, isLoading);
};

export default CharactersList;
