import Snowfall from 'react-snowfall';

export function WelcomeScreen({ onStart }) {
  return (
    <>
      <Snowfall />
      <div className="flex justify-center items-center h-screen">
        <button 
          onClick={onStart} 
          className="bg-green-800 font-south text-white px-8 py-4 text-xl rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          Commencer
        </button>
      </div>
    </>
  );
}