import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character, onDelete }) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p><strong>Archetype:</strong> {character.archetype}</p>
      <p><strong>Alignment:</strong> {character.alignment}</p>
      <p><strong>MBTI:</strong> {character.mbti}</p>
      <p><strong>Traits:</strong> {character.traits}</p>

      <div className="trait-sliders">
        {[
          { label: "Openness", value: character.openness },
          { label: "Conscientiousness", value: character.conscientiousness },
          { label: "Extraversion", value: character.extraversion },
          { label: "Agreeableness", value: character.agreeableness },
          { label: "Neuroticism", value: character.neuroticism }
        ].map((trait, index) => (
          <div key={index} className="slider-group">
            <label>{trait.label}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={trait.value}
              disabled
            />
          </div>
        ))}
      </div>

      <button className="delete-button" onClick={() => onDelete(character.id)}>
        ❌ Remove
      </button>
    </div>
  );
};

export default CharacterCard;
