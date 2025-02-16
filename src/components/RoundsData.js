const RoundsData = () => [
  {
    id: 1,
    name: "TEST ROUND 1",
    points: 10,
    difficulty: "Easy",
    imgSrc: "https://picsum.photos/id/1025/200/200",  
    challengeImg: "https://picsum.photos/id/1025/600/400",
    flag: "dummy_flag{test_eevee}",
    hint: "🔍 EEVEE may evolve in many ways, but in this challenge, evolution lies in the details! Look closely at the image metadata, hidden text, or unusual patterns. Tools like CyberChef or ExifTool might help uncover secrets. Try checking for steganography, EXIF data, or encoded messages—the flag might be hiding in plain sight! 🚀✨",
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
    hint: "🔥 Like Charizard's fiery breath, sometimes the key lies beneath the surface! Check for compressed archives, hidden files, or password-protected zips. Try tools like exiftool, steghide, and unzip to uncover secrets. Tip: If you encounter multiple .zip files, think of automation! A simple Bash script can help iterate through nested archives. Password-protected? The filename itself might be the key! 🗝️ Hint: 🔥 Evolution takes patience—keep extracting layer by layer! 🚀",
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
    hint: "Sometimes, the smallest details hold the biggest secrets. Look deeper than what meets the eye! 🔍 Hint: The image contains hidden information that isn’t visible at first glance. Pay close attention to patterns in the data—there might be a sequence that signals the end of the message. The answer is encoded in a way that requires breaking it down into readable text. 💡 Think like a detective: How does digital data represent text? Can you extract meaningful information from seemingly random values? The key lies in how the image is structured—something subtle yet significant. ⚡ Unravel the mystery, and the flag will be yours! ⚡",
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
    hint: "A true Pokémon trainer never stops at the surface—look inside, analyze, and battle through the layers! 🔍⚡ There's something hidden deep within—you need to extract it. Running the given file might not be enough; understanding its structure is key. 🏗️💡 A certain type of binary file could be the key to uncovering the flag. 🗝️💻 Think like a strategist: What happens when you dissect the challenge file layer by layer? Can you find something executable within? 🛠️🔑 Understanding how it works might reveal what it's protecting. Analyze, extract, and break through—just like in a real Gym Battle! 🏋️🔥",
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
    hint: "A true Pokémon trainer never gives up—decode, analyze, and capture the flag! 🏆🔍 Start by examining hidden metadata and visual patterns in the image. 🖼️👀 A secret path might lead you to a blockchain trail—where a certain transaction could be the key! 🔗💰 Interacting with the right function might just unlock what you're looking for. 🚀💡 Keep throwing your Pokéballs; persistence is the way to victory! ⚡🔓",
    // Incoming changes (commented out)
    // imgSrc:
    //   "https://imgcdn.stablediffusionweb.com/2024/3/15/1aa57cb3-0678-474e-b517-105ed8d288d8.jpg",
    // challengeImg: POKEBALLS,
    // flag: "blockchainclub{gotta_catch_em_all}",
    // collectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID_ROUND5,
  },
];

export default RoundsData;