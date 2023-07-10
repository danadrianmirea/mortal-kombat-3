import { Player } from "../data/players";
import styles from "./seletectedPlayer.module.css";

function SelectedPlayer({
  player,
  position,
}: {
  player: Player;
  position: "one" | "two";
}) {
  const moreStyles =
    position === "one" ? styles.seletedPlayerOne : styles.seletedPlayerTwo;

  return (
    <div className={moreStyles}>
      <img src={player.img} alt={player.name} />
    </div>
  );
}

export default SelectedPlayer;
