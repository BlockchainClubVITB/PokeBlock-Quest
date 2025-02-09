const RoundsData = () => [
  {
    id: 1,
    name: "TEST ROUND 1",
    points: 10,
    difficulty: "Easy",
    imgSrc: "https://picsum.photos/id/1025/200/200",  // 🖼 Fixed Picsum Image
    challengeImg: "https://picsum.photos/id/1025/600/400",
    flag: "dummy_flag{test_eevee}",
    // Incoming changes (commented out)
    // imgSrc:
    //   "https://images.squarespace-cdn.com/content/v1/571645b440261d0e2095da20/1551387712835-7VQ55YVY8JB03IOHE9EK/eevee.jpg?format=1000w",
    // challengeImg: EEVEE,
    // flag: "blockchainclub{eevee_can_evolve}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND1,
  },
  {
    id: 2,
    name: "TEST ROUND 2",
    points: 20,
    difficulty: "Easy",
    imgSrc: "https://picsum.photos/seed/test2/200",
    challengeImg: "https://picsum.photos/seed/test2/200",
    flag: "dummy_flag{test_charizard}",  // Dummy flag
    // Incoming changes (commented out)
    // imgSrc: "https://pics.craiyon.com/2024-09-21/vsLtBy8ZTIe78FNEyrEinw.webp",
    // challengeImg: CHARIZARD,
    // flag: "blockchainclub{charizard_flies_high}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND2,
  },
  {
    id: 3,
    name: "TEST ROUND 3",
    points: 30,
    difficulty: "Medium",
    imgSrc: "https://picsum.photos/seed/test3/250",
    challengeImg: "https://picsum.photos/seed/test3/250",
    flag: "dummy_flag{test_pikachu}",  // Dummy flag
    // Incoming changes (commented out)
    // imgSrc:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Zogh4jHtEANPFAgu29xBRbix-ELU6mMXg&s",
    // challengeImg: PIKACHU,
    // flag: "blockchainclub{pikachu_is_electric}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND3,
  },
  {
    id: 4,
    name: "TEST ROUND 4",
    points: 40,
    difficulty: "Medium",
    imgSrc: "https://picsum.photos/seed/test4/300",
    challengeImg: "https://picsum.photos/seed/test4/300",
    flag: "dummy_flag{test_gymbattle}",  // Dummy flag
    // Incoming changes (commented out)
    // imgSrc:
    //   "https://www.cnet.com/a/img/hub/2016/07/08/24fc9acf-bcc9-4b10-a1c2-7ab0bed13cbf/pokemon-gym.jpg",
    // challengeImg: GYMBATTLE,
    // flag: "blockchainclub{master_badge_awaits_you}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND4,
  },
  {
    id: 5,
    name: "TEST ROUND 5",
    points: 50,
    difficulty: "Hard",
    imgSrc: "https://picsum.photos/seed/test5/350",
    challengeImg: "https://picsum.photos/seed/test5/350",
    flag: "dummy_flag{test_pokeball}",  // Dummy flag
    // Incoming changes (commented out)
    // imgSrc:
    //   "https://imgcdn.stablediffusionweb.com/2024/3/15/1aa57cb3-0678-474e-b517-105ed8d288d8.jpg",
    // challengeImg: POKEBALLS,
    // flag: "blockchainclub{gotta_catch_em_all}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND5,
  },
];

export default RoundsData;
