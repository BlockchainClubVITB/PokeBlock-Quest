import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database, uniqueId } from "../utils/Config";
import RoundsData from "./RoundsData";
import { useAuth } from "../context/AuthContext"; // Correctly importing the custom hook

function Round() {
  const [currentRound, setCurrentRound] = useState(null);
  const { id } = useParams();
  const { user } = useAuth(); // Use the custom hook to fetch user details
  const [flag, setFlag] = useState("");
  const [notification, setNotification] = useState(null);

  const DATABASE_ID = "6749aaef0034b73295d6";
  const COLLECTION_ID = "679656b300020ec3e00b";

  useEffect(() => {
    if (!id) return;
    const rounds = RoundsData();
    const round = rounds.find((round) => round.id === parseInt(id));
    setCurrentRound(round);
  }, [id]);

  const handleFlagSubmit = async (e) => {
    e.preventDefault();
  
    // Normalize the flags by trimming and converting to lowercase (if case insensitive validation is required)
    const normalizedFlag = flag.trim().toLowerCase();
    const correctFlag = currentRound.flag.trim().toLowerCase();
  
    if (normalizedFlag === correctFlag) {
      try {
        // Prepare the submission document
        const documentData = {
          round_id: currentRound.id,
          round_name: currentRound.name,
          points_awarded: currentRound.points,
          team_name: user?.name, // Assuming user has 'name' field in AuthContext
          timestamp: new Date().toISOString(),
        };
  
        // Create a new document in the database
        const response = await database.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          uniqueId(), // Generates a unique ID for the document
          documentData
        );
  
        console.log("Document created:", response);
        setNotification({
          message: `Correct! You earned ${currentRound.points} points.`,
          type: "success",
        });
        setFlag(""); // Clear the flag input
      } catch (error) {
        console.error("Error submitting flag:", error);
        setNotification({
          message: "An error occurred while submitting the flag. Please try again.",
          type: "error",
        });
      }
    } else {
      setNotification({
        message: "Incorrect flag. Please try again!",
        type: "error",
      });
    }
  };

  const clearNotification = () => setNotification(null);

  if (!currentRound) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden text-white bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-bounce bg-yellow-500 opacity-40 rounded-full w-[500px] h-[500px] blur-3xl absolute top-10 left-20"></div>
        <div className="animate-bounce bg-orange-600 opacity-40 rounded-full w-[600px] h-[600px] blur-3xl absolute bottom-10 right-20"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 p-5 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-orange-700 animate-pulse">
          {currentRound.name} Challenge - Pokémon CTF
        </h1>
        <p className="container mb-6 text-lg text-center text-white animate-pulse">
          Welcome to the {currentRound.name} Challenge! Analyze the given image for clues and submit the correct flag to score <strong>{currentRound.points} points</strong>.
        </p>
        <div className="mb-6">
          <img
            src={currentRound.challengeImg}
            alt="CTF Challenge"
            className="max-w-xs mx-auto rounded-lg shadow-lg sm:max-w-md"
          />
        </div>
        <div className="mb-8 text-center">
          <a
            href={currentRound.challengeImg}
            download
            className="px-4 py-2 text-white transition-transform bg-pink-500 rounded-lg hover:bg-pink-600 hover:scale-105"
          >
            Download Resource Image
          </a>
        </div>

        {/* Flag Submission Form */}
        <form onSubmit={handleFlagSubmit} className="flex flex-col items-center">
          <div className="w-full max-w-md mb-4">
            <label htmlFor="flag" className="block mb-2 text-lg font-bold text-orange-700">
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

        {/* Notification */}
        {notification && (
          <div
            className={`mt-4 text-center px-4 py-2 rounded-lg ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            onClick={clearNotification}
          >
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Round;
