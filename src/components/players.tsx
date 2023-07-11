import players from "../data/players";
import PlayerComponent from "./player";
import styles from "./players.module.css";
import SelectedPlayer from "./selectedPlayer";
import { usePlayers } from "../hooks/usePlayers";

function Players() {
  const { playerOne, playerTwo, handleSelectPlayer } = usePlayers(players);

  return (
    <section className={styles.players}>
      {players.map((player) => (
        <PlayerComponent
          key={player.id}
          player={player}
          isSelected={
            playerOne?.id === player.id || playerTwo?.id === player.id
          }
          onSelectPlayer={handleSelectPlayer}
        />
      ))}
      {playerOne && <SelectedPlayer player={playerOne} position="one" />}
      {playerTwo && <SelectedPlayer player={playerTwo} position="two" />}
    </section>
  );
}

export default Players;
