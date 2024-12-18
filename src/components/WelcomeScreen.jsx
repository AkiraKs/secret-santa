import bg from '../img/SP-BG.png';
import music from '../img/music.mp3'; 

export function WelcomeScreen({ onStart }) {
  return (
    <header 
      className="w-full h-screen flex items-start justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <audio src={music} autoPlay loop />
      <button 
        onClick={onStart} 
        className="mt-44 bg-green-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
        aria-label="Commencer l'application Secret Santa"
      >
        Commencer
      </button>
    </header>
  );
}