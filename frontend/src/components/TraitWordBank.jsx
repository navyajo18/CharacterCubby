import React from 'react';

const traitCategories = {
  "Positive Traits": [
    "Loyal", "Brave", "Curious", "Honest", "Clever", "Empathetic", "Ambitious"
  ],
  "Flaws": [
    "Impulsive", "Stubborn", "Jealous", "Insecure", "Hot-headed", "Distrustful"
  ],
  "Quirks": [
    "Talks to animals", "Over-organizes", "Loves conspiracy theories", "Clumsy", "Sings when nervous"
  ]
};

const TraitWordBank = ({ selectedTraits, setSelectedTraits }) => {
  const handleAddTrait = (trait) => {
    if (!selectedTraits.includes(trait)) {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3> Trait Word Bank</h3>
      {Object.entries(traitCategories).map(([category, traits]) => (
        <div key={category} style={{ marginBottom: "10px" }}>
          <strong>{category}</strong>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "5px" }}>
            {traits.map((trait) => (
              <button
                key={trait}
                type="button"  // 🔥 prevents form submission!
                onClick={() => handleAddTrait(trait)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "12px",
                  border: "1px solid #aaa",
                  backgroundColor: selectedTraits.includes(trait) ? "#cfe3ff" : "#f0f0f0",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                {trait}
              </button>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TraitWordBank;
