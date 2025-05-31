import React, { useEffect, useState } from 'react';
import { getCharacters, deleteCharacter } from '../api';
import CharacterCard from '../components/CharacterCard';
import CharacterForm from '../components/CharacterForm';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setCharacters(res.data));
  }, []);

  const handleCharacterAdded = (newChar) => {
    setCharacters(prev => [...prev, newChar]);
  };

  const handleDelete = async (id) => {
    await deleteCharacter(id);
    setCharacters(prev => prev.filter(char => char.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧺 CharacterCubby</h1>
      <CharacterForm onCharacterAdded={handleCharacterAdded} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
