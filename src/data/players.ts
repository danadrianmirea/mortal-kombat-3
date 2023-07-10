import one from "../assets/avatar/1.png";
import two from "../assets/avatar/2.png";
import three from "../assets/avatar/3.png";
import four from "../assets/avatar/4.png";
import five from "../assets/avatar/5.png";
import six from "../assets/avatar/6.png";
import seven from "../assets/avatar/7.png";
import eight from "../assets/avatar/8.png";
import nine from "../assets/avatar/9.png";
import ten from "../assets/avatar/10.png";
// import eleven from "../assets/avatar/11.png";
import twelve from "../assets/avatar/12.png";
import thirteen from "../assets/avatar/13.png";
import fourteen from "../assets/avatar/14.png";
import fifteen from "../assets/avatar/15.png";
import sixteen from "../assets/avatar/16.png";
import seventeen from "../assets/avatar/17.png";
import eighteen from "../assets/avatar/18.png";
import nineteen from "../assets/avatar/19.png";
import twenty from "../assets/avatar/20.png";
import twentyone from "../assets/avatar/21.png";
import twentytwo from "../assets/avatar/22.png";
import twentythree from "../assets/avatar/23.png";
import twentyfour from "../assets/avatar/24.png";
import rain from "../assets/fightingStance/rain.gif";
import reptile from "../assets/fightingStance/reptile.gif";

export type Player = {
  id: number;
  name: string;
  avatar: string;
  img: string;
  hp: number;
};

const players: Player[] = [
  {
    id: 1,
    name: "RAIN",
    img: rain,
    hp: 100,
    avatar: one,
  },
  {
    id: 2,
    name: "REPTILE",
    img: reptile,
    hp: 100,
    avatar: two,
  },
  {
    id: 3,
    name: "STRYKER",
    img: "src/assets/fightingStance/stryker.gif",
    hp: 100,
    avatar: three,
  },
  {
    id: 4,
    name: "JAX",
    img: "src/assets/fightingStance/jax.gif",
    hp: 100,
    avatar: four,
  },
  {
    id: 5,
    name: "NIGHT WOLF",
    img: "src/assets/fightingStance/nightwolf.gif",
    hp: 100,
    avatar: five,
  },
  {
    id: 6,
    name: "JADE",
    img: "src/assets/fightingStance/jade.gif",
    hp: 100,
    avatar: six,
  },
  {
    id: 7,
    name: "NOOB SAIBOT",
    img: "src/assets/fightingStance/noobsaibot.gif",
    hp: 100,
    avatar: seven,
  },
  {
    id: 8,
    name: "SONYA",
    img: "src/assets/fightingStance/sonya.gif",
    hp: 100,
    avatar: eight,
  },
  {
    id: 9,
    name: "KANO",
    img: "src/assets/fightingStance/kano.gif",
    hp: 100,
    avatar: nine,
  },
  {
    id: 10,
    name: "MILEENA",
    img: "src/assets/fightingStance/mileena.gif",
    hp: 100,
    avatar: ten,
  },
  {
    id: 12,
    name: "SUB-ZERO",
    img: "src/assets/fightingStance/subzero1.gif",
    hp: 100,
    avatar: twelve,
  },
  {
    id: 13,
    name: "SUB-ZERO",
    img: "src/assets/fightingStance/subzero.gif",
    hp: 100,
    avatar: thirteen,
  },
  {
    id: 14,
    name: "KUNG LAO",
    img: "src/assets/fightingStance/kunglao.gif",
    hp: 100,
    avatar: fourteen,
  },
  {
    id: 15,
    name: "SEKTOR",
    img: "src/assets/fightingStance/sektor.gif",
    hp: 100,
    avatar: fifteen,
  },
  {
    id: 16,
    name: "KITANA",
    hp: 100,
    img: "src/assets/fightingStance/kitana.gif",
    avatar: sixteen,
  },
  {
    id: 17,
    name: "ERMAC",
    img: "src/assets/fightingStance/ermac.gif",
    hp: 100,
    avatar: seventeen,
  },
  {
    id: 18,
    name: "SCORPION",
    hp: 100,
    img: "src/assets/fightingStance/scorpion.gif",
    avatar: eighteen,
  },
  {
    id: 19,
    name: "CYRAX",
    img: "src/assets/fightingStance/cyrax.gif",
    hp: 100,
    avatar: nineteen,
  },
  {
    id: 20,
    name: "KABAL",
    img: "src/assets/fightingStance/kabal.gif",
    hp: 100,
    avatar: twenty,
  },
  {
    id: 21,
    name: "SINDEL",
    img: "src/assets/fightingStance/sindel.gif",
    hp: 100,
    avatar: twentyone,
  },
  {
    id: 22,
    name: "SMOKE",
    img: "src/assets/fightingStance/smoke.gif",
    hp: 100,
    avatar: twentytwo,
  },
  {
    id: 23,
    name: "LIU KANG",
    img: "src/assets/fightingStance/liukang.gif",
    hp: 100,
    avatar: twentythree,
  },
  {
    id: 24,
    name: "SHANG TSUNG",
    img: "src/assets/fightingStance/shangtsung.gif",
    hp: 100,
    avatar: twentyfour,
  },
];

export default players;
