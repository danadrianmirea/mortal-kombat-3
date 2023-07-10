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
import stryker from "../assets/fightingStance/stryker.gif";
import jax from "../assets/fightingStance/jax.gif";
import nightwolf from "../assets/fightingStance/nightwolf.gif";
import jade from "../assets/fightingStance/jade.gif";
import noobsaibot from "../assets/fightingStance/noobsaibot.gif";
import sonya from "../assets/fightingStance/sonya.gif";
import kano from "../assets/fightingStance/kano.gif";
import mileena from "../assets/fightingStance/mileena.gif";
import subzero1 from "../assets/fightingStance/subzero1.gif";
import subzero from "../assets/fightingStance/subzero.gif";
import kunglao from "../assets/fightingStance/kunglao.gif";
import sektor from "../assets/fightingStance/sektor.gif";
import kitana from "../assets/fightingStance/kitana.gif";
import ermac from "../assets/fightingStance/ermac.gif";
import scorpion from "../assets/fightingStance/scorpion.gif";
import cyrax from "../assets/fightingStance/cyrax.gif";
import kabal from "../assets/fightingStance/kabal.gif";
import sindel from "../assets/fightingStance/sindel.gif";
import smoke from "../assets/fightingStance/smoke.gif";
import liukang from "../assets/fightingStance/liukang.gif";
import shangtsung from "../assets/fightingStance/shangtsung.gif";

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
    img: stryker,
    hp: 100,
    avatar: three,
  },
  {
    id: 4,
    name: "JAX",
    img: jax,
    hp: 100,
    avatar: four,
  },
  {
    id: 5,
    name: "NIGHT WOLF",
    img: nightwolf,
    hp: 100,
    avatar: five,
  },
  {
    id: 6,
    name: "JADE",
    img: jade,
    hp: 100,
    avatar: six,
  },
  {
    id: 7,
    name: "NOOB SAIBOT",
    img: noobsaibot,
    hp: 100,
    avatar: seven,
  },
  {
    id: 8,
    name: "SONYA",
    img: sonya,
    hp: 100,
    avatar: eight,
  },
  {
    id: 9,
    name: "KANO",
    img: kano,
    hp: 100,
    avatar: nine,
  },
  {
    id: 10,
    name: "MILEENA",
    img: mileena,
    hp: 100,
    avatar: ten,
  },
  {
    id: 12,
    name: "SUB-ZERO",
    img: subzero1,
    hp: 100,
    avatar: twelve,
  },
  {
    id: 13,
    name: "SUB-ZERO",
    img: subzero,
    hp: 100,
    avatar: thirteen,
  },
  {
    id: 14,
    name: "KUNG LAO",
    img: kunglao,
    hp: 100,
    avatar: fourteen,
  },
  {
    id: 15,
    name: "SEKTOR",
    img: sektor,
    hp: 100,
    avatar: fifteen,
  },
  {
    id: 16,
    name: "KITANA",
    hp: 100,
    img: kitana,
    avatar: sixteen,
  },
  {
    id: 17,
    name: "ERMAC",
    img: ermac,
    hp: 100,
    avatar: seventeen,
  },
  {
    id: 18,
    name: "SCORPION",
    hp: 100,
    img: scorpion,
    avatar: eighteen,
  },
  {
    id: 19,
    name: "CYRAX",
    img: cyrax,
    hp: 100,
    avatar: nineteen,
  },
  {
    id: 20,
    name: "KABAL",
    img: kabal,
    hp: 100,
    avatar: twenty,
  },
  {
    id: 21,
    name: "SINDEL",
    img: sindel,
    hp: 100,
    avatar: twentyone,
  },
  {
    id: 22,
    name: "SMOKE",
    img: smoke,
    hp: 100,
    avatar: twentytwo,
  },
  {
    id: 23,
    name: "LIU KANG",
    img: liukang,
    hp: 100,
    avatar: twentythree,
  },
  {
    id: 24,
    name: "SHANG TSUNG",
    img: shangtsung,
    hp: 100,
    avatar: twentyfour,
  },
];

export default players;
