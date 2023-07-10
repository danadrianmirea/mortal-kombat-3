import { useState } from "react";
import players, { Player } from "../data/players";
import PlayerComponent from "./player";
import styles from "./players.module.css";
import SelectedPlayer from "./selectedPlayer";

function Players() {
  const [playerOne, setPlayerOne] = useState<Player | null>(null);
  const [playerTwo, setPlayerTwo] = useState<Player | null>(null);
  const [confirmPlayerOne, setConfirmPlayerOne] = useState<boolean>(false);

  const handleSelectPlayer = (player: Player) => {
    if (confirmPlayerOne) {
      setPlayerTwo(player);
      return;
    }

    if (playerOne && player.id === playerOne.id) {
      setConfirmPlayerOne(true);
      return;
    }

    setPlayerOne(player);
  };

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
