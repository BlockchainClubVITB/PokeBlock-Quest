const RoundsData = () => [
  {
    id: 1,
    name: "TEST ROUND 1",
    points: 10,
    difficulty: "Easy",
    imgSrc: "https://picsum.photos/id/1025/200/200",  // 🖼 Fixed Picsum Image
    challengeImg: "https://picsum.photos/id/1025/600/400",
    flag: "dummy_flag{test_eevee}",
  },
  {
    id: 2,
    name: "TEST ROUND 2",
    points: 20,
    difficulty: "Easy",
    imgSrc: "https://picsum.photos/seed/test2/200",
    challengeImg: "https://picsum.photos/seed/test2/200",
    flag: "dummy_flag{test_charizard}",  // Dummy flag
  },
  {
    id: 3,
    name: "TEST ROUND 3",
    points: 30,
    difficulty: "Medium",
    imgSrc: "https://picsum.photos/seed/test3/250",
    challengeImg: "https://picsum.photos/seed/test3/250",
    flag: "dummy_flag{test_pikachu}",  // Dummy flag
  },
  {
    id: 4,
    name: "TEST ROUND 4",
    points: 40,
    difficulty: "Medium",
    imgSrc: "https://picsum.photos/seed/test4/300",
    challengeImg: "https://picsum.photos/seed/test4/300",
    flag: "dummy_flag{test_gymbattle}",  // Dummy flag
  },
  {
    id: 5,
    name: "TEST ROUND 5",
    points: 50,
    difficulty: "Hard",
    imgSrc: "https://picsum.photos/seed/test5/350",
    challengeImg: "https://picsum.photos/seed/test5/350",
    flag: "dummy_flag{test_pokeball}",  // Dummy flag
  },
];

export default RoundsData;
