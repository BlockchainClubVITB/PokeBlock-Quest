import EEVEE from "../assets/eevee.png";
import CHARIZARD from "../assets/charizard.jpg";
import PIKACHU from "../assets/pikachu.png";
import GYMBATTLE from "../assets/gymBattle.png";
import POKEBALLS from "../assets/pokeball.png";

const RoundsData = () => [
  {
    id: 1,
    name: "EEVEE",
    points: 30,
    difficulty: "Easy",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/571645b440261d0e2095da20/1551387712835-7VQ55YVY8JB03IOHE9EK/eevee.jpg?format=1000w",
    challengeImg: EEVEE,
    flag: "blockchainclub{eevee_can_evolve}",
  },
  {
    id: 2,
    name: "CHARIZARD",
    points: 30,
    difficulty: "Easy",
    imgSrc: "https://pics.craiyon.com/2024-09-21/vsLtBy8ZTIe78FNEyrEinw.webp",
    challengeImg: CHARIZARD,
    flag: "blockchainclub{charizard_flies_high}",
  },
  {
    id: 3,
    name: "PIKACHU",
    points: 60,
    difficulty: "Medium",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Zogh4jHtEANPFAgu29xBRbix-ELU6mMXg&s",
    challengeImg: PIKACHU,
    flag: "blockchainclub{pikachu_is_electric}",
  },
  {
    id: 4,
    name: "GYM BATTLE",
    points: 60,
    difficulty: "Medium",
    imgSrc:
      "https://www.cnet.com/a/img/hub/2016/07/08/24fc9acf-bcc9-4b10-a1c2-7ab0bed13cbf/pokemon-gym.jpg",
    challengeImg: GYMBATTLE,
    flag: "blockchainclub{master_badge_awaits_you}",
  },
  {
    id: 5,
    name: "POKEBALLS",
    points: 100,
    difficulty: "Hard",
    imgSrc:
      "https://imgcdn.stablediffusionweb.com/2024/3/15/1aa57cb3-0678-474e-b517-105ed8d288d8.jpg",
    challengeImg: POKEBALLS,
    flag: "blockchainclub{gotta_catch_em_all}",
  },
];

export default RoundsData;
