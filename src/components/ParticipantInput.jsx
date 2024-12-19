import { useState } from "react";
import bg from '../img/bg2.png';

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    if (currentName.trim() !== "") { 
      onAddParticipant(currentName);
      setCurrentName("");
    }
  };

  return (
    <>
      <header
        className="w-full h-screen fixed top-0 left-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      ></header>

      <div className="relative space-y-6 p-6 bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-lg mx-auto mt-12 z-10">
        {/* Titre */}
        <h1 className="text-3xl font-bold text-center font-south text-green-600">Liste des Participants</h1>

        {/* Champ d'ajout */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            className="flex-grow rounded-lg border-2 border-gray-300 px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
          />
          <button
            onClick={addParticipant}
            className="bg-green-800 font-south text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            Ajouter
          </button>
        </div>

        {/* Liste des participants */}
        <ul className="space-y-3">
          {participants.map((participant, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow">
              <span>{participant}</span>
              <button
                onClick={() => onRemoveParticipant(index)}
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