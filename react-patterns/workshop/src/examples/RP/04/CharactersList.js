import { useState, useEffect } from "react";

const CharactersList = ({ url, resource, format, render }) => {
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

  return render(characters, isLoading);
};

export default CharactersList;
