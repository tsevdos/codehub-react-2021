import { useState, useEffect } from "react";

const CharactersList = ({ url, resource, format, render }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [url, resource, format]);

  return render(characters);
};

export default CharactersList;
