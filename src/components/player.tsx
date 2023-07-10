import { Player } from "../data/players";
import styles from "./player.module.css";

type PlayerProps = {
  player: Player;
  isSelected: boolean;
  onSelectPlayer: (player: Player) => void;
};

function Player({ player, isSelected, onSelectPlayer }: PlayerProps) {
  const borderStyles = {
    outline: isSelected ? "5px solid #21aa21" : "none",
  };

  return (
    <div className={styles.player} onClick={() => onSelectPlayer(player)}>
      <img src={player.avatar} alt={player.name} style={borderStyles} />
    </div>
  );
}

export default Player;
