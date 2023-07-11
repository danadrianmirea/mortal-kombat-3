import { AiFillSound } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";
import styles from "./sound.module.css";

type SoundProps = {
  isMuted: boolean;
  onClickSound: () => void;
};

function Sound({ isMuted, onClickSound }: SoundProps) {
  return (
    <div className={styles.sound}>
      {isMuted ? (
        <FaVolumeMute onClick={onClickSound} />
      ) : (
        <AiFillSound onClick={onClickSound} />
      )}
    </div>
  );
}

export default Sound;
