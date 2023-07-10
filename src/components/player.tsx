import styles from "./player.module.css";

type Player = {
  id: number;
  name: string;
  avatar: string;
};

type PlayerProps = {
  player: Player;
};

function Player({ player }: PlayerProps) {
  return (
    <div className={styles.player}>
      <img src={player.avatar} alt={player.name} />
    </div>
  );
}

export default Player;
