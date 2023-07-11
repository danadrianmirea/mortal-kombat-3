import styles from "./startButton.module.css";

function StartButton({ onStart }: { onStart: () => void }) {
  return (
    <button className={styles.startButton} onClick={onStart}>
      Start Game
    </button>
  );
}

export default StartButton;
