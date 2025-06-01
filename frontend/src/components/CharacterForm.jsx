import React, { useState } from 'react';
import { createCharacter } from '../api';
import TraitWordBank from './TraitWordBank'; // ⬅️ import it

const CharacterForm = ({ onCharacterAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    archetype: '',
    alignment: '',
    traits: [],
    mbti: '',
    age: 25,
    socialEnergy: 50,
    moodTone: 50,
    structure: 50,
    imagination: 50
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
    const response = await createCharacter({
      ...formData,
      traits: formData.traits.join(', ') // convert array to string if needed by backend
    });
    onCharacterAdded(response.data);
    setFormData({
      name: '',
      archetype: '',
      alignment: '',
      traits: [],
      mbti: '',
      age: 25,
      socialEnergy: 50,
      moodTone: 50,
      structure: 50,
      imagination: 50
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Create a Character</h2>

      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="archetype" value={formData.archetype} onChange={handleChange} placeholder="Archetype" />
      <input type="text" name="alignment" value={formData.alignment} onChange={handleChange} placeholder="Alignment" />
      <input type="text" name="mbti" value={formData.mbti} onChange={handleChange} placeholder="MBTI Type (e.g. INFP)" />

      {/*  Trait Word Bank */}
      <TraitWordBank
        selectedTraits={formData.traits}
        setSelectedTraits={(traits) =>
          setFormData((prev) => ({ ...prev, traits }))
        }
      />

      {/* 🎚️ New Sliders for Personality */}
      <label>Age: {formData.age}</label>
      <input type="range" name="age" min="5" max="100" value={formData.age} onChange={handleChange} />

      <label>Social Energy (Shy — Outgoing): {formData.socialEnergy}</label>
      <input type="range" name="socialEnergy" min="0" max="100" value={formData.socialEnergy} onChange={handleChange} />

      <label>Mood Tone (Light — Brooding): {formData.moodTone}</label>
      <input type="range" name="moodTone" min="0" max="100" value={formData.moodTone} onChange={handleChange} />

      <label>Routine vs Chaos (Structured — Spontaneous): {formData.structure}</label>
      <input type="range" name="structure" min="0" max="100" value={formData.structure} onChange={handleChange} />

      <label>Imagination (Practical — Dreamy): {formData.imagination}</label>
      <input type="range" name="imagination" min="0" max="100" value={formData.imagination} onChange={handleChange} />

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
