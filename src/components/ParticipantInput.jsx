import { useState } from "react";
import Snowfall from 'react-snowfall';

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    if (currentName.trim() === "") {
      return;
    }
    if (participants.includes(currentName.trim())) {
      return;
    }
    onAddParticipant(currentName);
    setCurrentName("");
  };

  const removeParticipant = (index) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce participant ?")) {
      onRemoveParticipant(index);
    }
  };

  return (
    <>
      <Snowfall />
      <div className="space-y-6 p-6 bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-lg mx-auto mt-12 z-10">
        <h1 className="text-3xl font-bold text-center font-south text-green-600">Liste des Participants</h1>

        {/* Champ d'ajout */}
        <div className="flex flex-col gap-1 items-center space-x-3">
          <input
            type="text"
            className="flex-grow rounded-lg border-2 border-gray-300 px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            aria-label="Nom du participant"
          />
          <button
            onClick={addParticipant}
            className="bg-green-800 mt-8 font-south text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            Ajouter
          </button>
        </div>

        {/* Liste des participants */}
        <ul className="space-y-3 transition-all duration-500">
          {participants.map((participant, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow">
              <span>{participant}</span>
              <button
                onClick={() => removeParticipant(index)}
                className="text-red-600 font-south hover:text-red-800 transition duration-300"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}