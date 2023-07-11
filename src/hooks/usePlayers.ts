import { useCallback, useEffect, useState } from "react";
import { Player } from "../data/players";
import * as CTS from "../constants";

export function usePlayers(players: Player[]) {

  const [playerOne, setPlayerOne] = useState<Player | null>(null);
  const [playerTwo, setPlayerTwo] = useState<Player | null>(null);
  const [confirmPlayerOne, setConfirmPlayerOne] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === CTS.ARROW_LEFT ||
        event.key === CTS.ARROW_RIGHT ||
        event.key === CTS.ARROW_UP ||
        event.key === CTS.ARROW_DOWN
      ) {
        if (!playerOne) {
          setPlayerOne(players[0]);
          return;
        }

        const selectedPlayer = confirmPlayerOne ? playerTwo : playerOne;

        const index = selectedPlayer
          ? players.findIndex((p) => p.id === selectedPlayer.id)
          : -1;
        let nextIndex = index;

        if (event.key === CTS.ARROW_LEFT || event.key === CTS.ARROW_UP) {
          nextIndex -= event.key === CTS.ARROW_LEFT ? 1 : CTS.MAX_LENGTH_ROW;
        } else if (
          event.key === CTS.ARROW_RIGHT ||
          event.key === CTS.ARROW_DOWN
        ) {
          nextIndex += event.key === CTS.ARROW_RIGHT ? 1 : CTS.MAX_LENGTH_ROW;
        }

        if (nextIndex < 0 || nextIndex >= players.length) {
          return;
        }

        handleSelectPlayer(players[nextIndex]);
      }

      if (event.key === CTS.ENTER) {
        if (playerOne && playerTwo) {
          setPlayerOne(null);
          setPlayerTwo(null);
          setConfirmPlayerOne(false);
        } else if (playerOne && !playerTwo) {
          setConfirmPlayerOne(true);
          setPlayerTwo(playerOne);
        }
      }

      if (event.key === CTS.ESCAPE) {
        setPlayerOne(null);
        setPlayerTwo(null);
        setConfirmPlayerOne(false);
      }
    },
    [playerOne, playerTwo, confirmPlayerOne]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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

  return {
    playerOne,
    playerTwo,
    handleSelectPlayer,
  }
  
}