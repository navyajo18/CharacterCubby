import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character, onDelete }) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p><strong>Archetype:</strong> {character.archetype}</p>
      <p><strong>Alignment:</strong> {character.alignment}</p>
      <p><strong>MBTI:</strong> {character.mbti}</p>

      <p><strong>Traits:</strong></p>
      <ul style={{ paddingLeft: "20px" }}>
        {character.traits &&
          (Array.isArray(character.traits)
            ? character.traits
            : character.traits.split(',')
          ).map((trait, idx) => (
            <li key={idx}>{trait.trim()}</li>
        ))}
      </ul>


      <p><strong>Age:</strong> {character.age}</p>

      <div className="trait-sliders">
        {[
          { label: "Social Energy", value: character.socialEnergy },
          { label: "Routine vs Chaos", value: character.structure },
          { label: "Mood Tone", value: character.moodTone },
          { label: "Imagination", value: character.imagination }
        ].map((trait, index) => (
          <div key={index} className="slider-group">
            <label>{trait.label}: {trait.value}</label> {/* 👈 show value */}
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
