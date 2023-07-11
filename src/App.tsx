import { useEffect, useState } from "react";
import Players from "./components/players";
import Title from "./components/title";
import selectYourFighter from "./assets/audios/select-your-fighter.mp3";
import start from "./assets/audios/laughing.mp3";
import StartButton from "./components/startButton";

function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState<HTMLAudioElement>(new Audio(selectYourFighter));

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <main>
      {isPlaying ? (
        <>
          <Title />
          <Players />
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
