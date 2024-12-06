import { useState } from "react";
import { database } from "../appwriteConfig"; // Ensure this path is correct
import ctfimage from "../assets/evee.png"; // Ensure the image path is correct

function EveChallenge() {
  const [flag, setFlag] = useState(""); // State for flag submission
  const [points, setPoints] = useState(0); // State to track points
  const [error, setError] = useState(null); // Error message

  // Handles flag submission
  const handleFlagSubmit = async (e) => {
    e.preventDefault();

    const DATABASE_ID = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID; // Replace with actual Database ID
    const COLLECTION_ID = import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID; // Replace with actual Collection ID

    try {
      if (flag === "POKEMON123") {
        setPoints(points + 30); // Increment points on correct flag

        const documentData = {
          question: "What is the flag for Eve Challenge?",
          answer: flag,
          points: points + 30,
        };

        const response = await database.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          "unique()", // Unique ID for the document
          documentData
        );

        console.log("Document created:", response);
        alert("Flag submitted successfully!");
        setFlag(""); // Reset flag input
      } else {
        alert("Incorrect flag. Try again!");
      }
    } catch (error) {
      console.error("Error submitting flag:", error);
      setError("An error occurred while submitting the flag.");
    }
  };

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
          Eve Challenge - Pokémon CTF
        </h1>

        {/* Question Text with Animation */}
        <p className="container mb-6 text-lg text-center text-white animate-pulse">
          Welcome to the Eve Challenge! Your task is to uncover the hidden flag
          in the given image. Analyze the image for hidden clues, check
          metadata, or use steganography techniques. Once you find the correct
          flag, enter it below to score <strong>30 points</strong>. Good luck,
          Trainer!
        </p>

        {/* Fixed Image (No Animation) */}
        <div className="mb-6">
          <img
            src={ctfimage}
            alt="CTF Challenge"
            className="max-w-xs mx-auto rounded-lg shadow-lg sm:max-w-md"
          />
        </div>

        {/* Resource Download Section */}
        <div className="mb-8 text-center">
          <a
            href={ctfimage} // Link to image
            download
            className="px-4 py-2 text-white transition-transform bg-pink-500 rounded-lg hover:bg-pink-600 hover:scale-105"
          >
            Download Resource Image
          </a>
        </div>

        {/* Flag Submission Form */}
        <form onSubmit={handleFlagSubmit} className="flex flex-col items-center">
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
          <span className="font-bold">Points:</span> {points}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center text-red-500">{error}</div>
        )}
      </div>
    </div>
  );
}

export default EveChallenge;
