import React, { useState, useEffect } from "react";
import CharactersList from "./CharactersList";

const CharactersListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return <CharactersList characters={characters} />;
};

export default CharactersListContainer;
