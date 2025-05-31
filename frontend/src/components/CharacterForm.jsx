import React, { useState } from 'react';
import { createCharacter } from '../api';

const CharacterForm = ({ onCharacterAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    archetype: '',
    alignment: '',
    traits: '',
    mbti: '',
    openness: 50,
    conscientiousness: 50,
    extraversion: 50,
    agreeableness: 50,
    neuroticism: 50
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'range' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createCharacter(formData);
    onCharacterAdded(response.data);
    setFormData({
      name: '',
      archetype: '',
      alignment: '',
      traits: '',
      mbti: '',
      openness: 50,
      conscientiousness: 50,
      extraversion: 50,
      agreeableness: 50,
      neuroticism: 50
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Create a Character</h2>

      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="archetype" value={formData.archetype} onChange={handleChange} placeholder="Archetype" />
      <input type="text" name="alignment" value={formData.alignment} onChange={handleChange} placeholder="Alignment" />
      <textarea name="traits" value={formData.traits} onChange={handleChange} placeholder="Traits (comma separated)" />
      <input type="text" name="mbti" value={formData.mbti} onChange={handleChange} placeholder="MBTI Type (e.g. INFP)" />

      {/* Personality trait sliders */}
      {[
        "openness",
        "conscientiousness",
        "extraversion",
        "agreeableness",
        "neuroticism"
      ].map((trait) => (
        <div key={trait}>
          <label>{trait.charAt(0).toUpperCase() + trait.slice(1)}: {formData[trait]}</label>
          <input
            type="range"
            name={trait}
            min="0"
            max="100"
            value={formData[trait]}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit">Add Character</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
  maxWidth: '400px'
};

export default CharacterForm;
