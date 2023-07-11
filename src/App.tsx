import { useEffect, useState } from "react";
import Players from "./components/players";
import Title from "./components/title";
import selectYourFighter from "./assets/audios/select-your-fighter.mp3";
import start from "./assets/audios/laughing.mp3";
import StartButton from "./components/startButton";
import Sound from "./components/sound";

function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState<HTMLAudioElement>(new Audio(selectYourFighter));
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  const handleSound = () => {
    if (isMuted) {
      audio.autoplay = true;
      audio.play().catch((err) => console.log(err));
      setIsMuted(false);
      return;
    }
    audio.pause();
    setIsMuted(true);
  };

  return (
    <main>
      {isPlaying ? (
        <>
          <Title />
          <Players />
          <Sound isMuted={isMuted} onClickSound={handleSound} />
        </>
      ) : (
        <StartButton
          onStart={() => {
            const audioStart = new Audio(start);
            audioStart.play().catch((err) => console.log(err));
            audio.autoplay = true;
            audio.play().catch((err) => console.log(err));
            setIsPlaying(true);
          }}
        />
      )}
    </main>
  );
}

export default App;
