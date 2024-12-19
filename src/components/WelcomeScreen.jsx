import Snowfall from 'react-snowfall';

export function WelcomeScreen({ onStart }) {
  const playSound = () => {
    const audio = new Audio('./src/img/music.mp3');
    audio.play();
  };

  const handleStart = () => {
    playSound();
    onStart();
  };

  return (
    <>
      <Snowfall />
      <div className="flex flex-col justify-center items-center h-screen p-4">
        <h1 className="text-3xl font-bold text-green-800 mb-4 text-center font-south">Bienvenue !</h1>
        <button 
          onClick={handleStart} 
          className="bg-green-800 font-south text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          Commencer
        </button>
      </div>
    </>
  );
}