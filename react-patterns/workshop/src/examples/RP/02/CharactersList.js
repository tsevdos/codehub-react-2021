import { useState, useEffect } from "react";

const CharactersList = ({ render }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return render(characters);
};

export default CharactersList;
