import { useState } from "react";
import bg from './img/SP-BG.png';

import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import panneau from './img/panneau.png';
import cadeau from './img/cadeau.png';

export default function App() {
  
  const [participants, setParticipants] = useState([]);

  const [assignments, setAssignments] = useState([]);
  
  const [currentScreen, setCurrentScreen] = useState("welcome");

 
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };


  const distributeGifts = () => {

    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

   
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
   
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    
    setAssignments(newAssignments);
  
    setCurrentScreen("assignments");
  };


  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
   
       <div 
      className="w-full h-screen flex items-start justify-center bg-contain bg-bg bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}

        {currentScreen === "input" && (
          <>
          <img src={panneau} alt="ajoutez des partcipants" className="block mx-auto w-1/2 pt-4" />
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6 flex justify-center">
              <button className=" bg-green-800 font-south text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
          </>
        )}
        {currentScreen === "assignments" && (
          <>
            <img src={cadeau} alt="cadeau" className="block mx-auto w-1/2 pt-4" />
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6 flex justify-center">
              <button className="bg-green-800 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 font-south" onClick={resetApp}>
                Recommencer
              </button>
            </div>
          </>
        )}
      </div>
      </div>
    
  );
}
