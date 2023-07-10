import players from "../data/players.json";
import Player from "./player";
import styles from "./players.module.css";

function Players() {
  return (
    <section className={styles.players}>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </section>
  );
}

export default Players;
