import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database, uniqueId } from "../utils/Config"; 
import RoundsData from "./RoundsData";

function Round() {
  const [currentRound, setCurrentRound] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    const rounds = RoundsData();
    const round = rounds.find((round) => round.id === parseInt(id));
    setCurrentRound(round);
  }, [id]);

  const [flag, setFlag] = useState("");
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);

  const DATABASE_ID = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;
  const COLLECTION_ID = import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID;

  const handleFlagSubmit = async (e) => {
    e.preventDefault();

  //   try {
  //     if (flag === currentRound.flag) {
  //       setScore(score + currentRound.points);

  //       const documentData = {
  //         question: `What is the flag for ${currentRound.name} Challenge?`,
  //         answer: flag,
  //         points: score + currentRound.points,
  //       };

  //       const response = await database.createDocument(
  //         DATABASE_ID,
  //         COLLECTION_ID,
  //         uniqueId,
  //         documentData
  //       );

  //       console.log("Document created:", response);
  //       alert("Flag submitted successfully!");
  //       setFlag(""); 
  //     } else {
  //       alert("Incorrect flag. Try again!");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting flag:", error);
  //     setError("An error occurred while submitting the flag.");
  //   }
  };

  if (!currentRound) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden text-white bg-gray-900">
      {/* Animated Background (Bouncing Circles) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-bounce bg-yellow-500 opacity-40 rounded-full w-[500px] h-[500px] blur-3xl absolute top-10 left-20"></div>
        <div className="animate-bounce bg-orange-600 opacity-40 rounded-full w-[600px] h-[600px] blur-3xl absolute bottom-10 right-20"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 p-5 mx-auto">
        {/* Section Header with Text Animation */}
        <h1 className="mb-6 text-4xl font-bold text-center text-orange-700 animate-pulse">
          {currentRound.name} Challenge - Pokémon CTF
        </h1>

        {/* Question Text with Animation */}
        <p className="container mb-6 text-lg text-center text-white animate-pulse">
          Welcome to the {currentRound.name} Challenge! Your task is to uncover
          the hidden flag in the given image. Analyze the image for hidden
          clues, check metadata, or use steganography techniques. Once you find
          the correct flag, enter it below to score{" "}
          <strong>{currentRound.points} points</strong>. Good luck, Trainer!
        </p>

        {/* Fixed Image (No Animation) */}
        <div className="mb-6">
          <img
            src={currentRound.challengeImg}
            alt="CTF Challenge"
            className="max-w-xs mx-auto rounded-lg shadow-lg sm:max-w-md"
          />
        </div>

        {/* Resource Download Section */}
        <div className="mb-8 text-center">
          <a
            href={currentRound.challengeImg} // Link to image
            download
            className="px-4 py-2 text-white transition-transform bg-pink-500 rounded-lg hover:bg-pink-600 hover:scale-105"
          >
            Download Resource Image
          </a>
        </div>

        {/* Flag Submission Form */}
        <form
          onSubmit={handleFlagSubmit}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-md mb-4">
            <label
              htmlFor="flag"
              className="block mb-2 text-lg font-bold text-orange-700"
            >
              Enter the Flag:
            </label>
            <input
              type="text"
              id="flag"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              placeholder="Enter your flag here"
              className="w-full p-2 text-black border border-gray-400 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white transition-transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
          >
            Submit Flag
          </button>
        </form>

        {/* Points Display */}
        <div className="mt-6 text-lg text-center text-orange-700 animate-pulse">
          <span className="font-bold">Points:</span> {score}
        </div>

        {/* Error Message */}
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
      </div>
    </div>
  );
}

export default Round;
