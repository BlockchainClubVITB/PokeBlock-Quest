import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  database,
  uniqueId,
  Query,
  DatabaseId,
  CollectionId,
} from "../utils/Config";
import RoundsData from "./RoundsData";
import RoundHint from "./RoundHint";
import { useAuth } from "../context/AuthContext";

function Round() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [currentRound, setCurrentRound] = useState(null);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    if (!id) return;
    const rounds = RoundsData();
    const round = rounds.find((round) => round.id === Number(id));
    setCurrentRound(round);
  }, [id]);

  const handleFlagSubmit = async (e) => {
    e.preventDefault();

    if (!flag.trim()) {
      toast.error("Please enter a flag before submitting!", {
        position: "top-right",
      });
      return;
    }

    try {
      const existingSubmissions = await database.listDocuments(
        DatabaseId,
        CollectionId,
        [
          Query.equal("round_id", currentRound.id),
          Query.equal("team_name", user?.name),
        ]
      );

      if (existingSubmissions && existingSubmissions.total > 0) {
        toast.success(
          "Your Team member has successfully submitted the answer. You can proceed with the next round.",
          { position: "top-right" }
        );
        return;
      }

      const normalizedFlag = flag.trim().toLowerCase();
      const correctFlag = currentRound.flag.trim().toLowerCase();

      if (normalizedFlag !== correctFlag) {
        toast.error("Incorrect flag. Please try again!", {
          position: "top-right",
        });
        return;
      }

      const documentData = {
        round_id: currentRound.id,
        round_name: currentRound.name,
        points_awarded: currentRound.points,
        team_name: user?.name,
        timestamp: new Date().toISOString(),
      };

      await database.createDocument(
        DatabaseId,
        CollectionId,
        uniqueId(),
        documentData
      );

      toast.success("Flag submitted successfully!", {
        position: "top-right",
      });

      setFlag("");
    } catch (error) {
      console.error("Error submitting flag:", error);
      toast.error("An error occurred while submitting the flag.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  if (!currentRound) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-br from-gray-900 to-gray-900">
      <Toaster />

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 z-20"
      >
        <svg
          className="w-6 h-6 text-gray-300 hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse bg-yellow-500 opacity-20 rounded-full w-[600px] h-[600px] blur-3xl absolute -top-20 -left-20"></div>
        <div className="animate-pulse bg-orange-600 opacity-20 rounded-full w-[700px] h-[700px] blur-3xl absolute -bottom-20 -right-20"></div>
        <div className="animate-pulse bg-pink-500 opacity-10 rounded-full w-[400px] h-[400px] blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 p-5 mx-auto flex flex-col items-center">
        <h1
          className="mb-8 text-5xl font-bold text-center text-orange-700 "
          style={{ fontFamily: "Cinzel, serif" }}
        >
          {currentRound.name} Challenge
        </h1>
        <div className="max-w-2xl mb-8">
          <p className="text-xl text-center text-gray-200 leading-relaxed">
            Welcome to the{" "}
            <span className="font-semibold text-orange-400">
              {currentRound.name}
            </span>{" "}
            Challenge! Analyze the given image for clues and submit the correct
            flag to score{" "}
            <span className="font-bold text-pink-400">
              {currentRound.points} points
            </span>
            .
          </p>
        </div>
        <RoundHint currentRound={currentRound} />
        <div className="mb-8">
          <img
            src={currentRound.challengeImg}
            alt="CTF Challenge"
            className="max-w-xs sm:max-w-md rounded-lg shadow-lg mb-4"
          />
          <a
            href={currentRound.challengeImg}
            download
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2926/2926214.png"
              alt="Download"
              className="w-6 h-6 inline-block mr-2 invert"
            />
            Download Image
          </a>
        </div>
        <form onSubmit={handleFlagSubmit} className="w-full max-w-md">
          <div className="mb-6">
            <label
              htmlFor="flag"
              className="block mb-3 text-xl font-bold text-orange-400 text-center"
            >
              Enter the Flag
            </label>
            <div className="relative">
              <input
                type="text"
                id="flag"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                placeholder="Enter your flag here..."
                className="w-full px-4 py-3 text-gray-800 bg-white/90 backdrop-blur-sm border-2 border-orange-400/50 
                           rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 
                           transition-all duration-300"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!flag.trim()}
            className={`w-full px-4 py-2 text-white rounded transition-all duration-300 ${
              flag.trim()
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {flag.trim() ? "Submit Flag" : "Enter Flag to Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Round;