import { useEffect, useState } from "react";
import { database, Query, DatabaseId, CollectionId } from "../utils/Config";
import Hint from "./Hint";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RoundsData from "./RoundsData";

function Rounds() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const roundData = RoundsData();
  const [score, setScore] = useState(0);
  const [completedRounds, setCompletedRounds] = useState([]);

  useEffect(() => {
    if (user) {
      database
        .listDocuments(DatabaseId, CollectionId, [
          Query.equal("team_name", user?.name),
        ])
        .then((response) => {
          const documents = response.documents || [];
          const totalScore = documents.reduce(
            (acc, doc) => acc + (doc.points_awarded || 0),
            0
          );
          setScore(totalScore);
          const completedRoundIds = documents.map((doc) => doc.round_id);
          setCompletedRounds(completedRoundIds);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);

  const handleRoundClick = (card) => {
    navigate(`/round/${card.id}`, { state: { card } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      
        <header className="sticky top-0 z-30 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
          <h1 
            className="text-3xl md:text-5xl lg:text-7xl text-orange-700 font-semibold"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Rounds
          </h1>
          
          {user && (
            <div className="flex items-center gap-2 md:gap-4">
              <div className="bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <img
              src="/diamond.png"
              className="w-5 h-5 md:w-6 md:h-6"
              alt="score icon"
            />
            <span className="text-sm md:text-base font-medium">{score}</span>
              </div>
              
              <button
            onClick={() => window.location.href = "https://leader-poke.vercel.app/"}
            className="bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg flex items-center gap-2 
                 hover:bg-white/20 transition-all duration-300"
              >
            <img src="/trophy-star.png" alt="leaderboard" className="w-5 h-5" />
            <span className="hidden md:inline">Leaderboard</span>
              </button>
              
              <button
            onClick={logoutUser}
            className="bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg flex items-center gap-2 
                 hover:bg-white/20 transition-all duration-300"
              >
            <img src="/logout.png" alt="logout" className="w-5 h-5 invert" />
            <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          )}
            </div>
          </div>
        </header>

        {/* Rounds Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roundData.map((card) => (
            <div
              key={card.id}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl 
                         hover:transform hover:scale-105 transition-all duration-300
                         ${completedRounds.includes(card.id) ? "overflow-hidden" : ""}`}
            >
              {completedRounds.includes(card.id) && (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,120,0,0.2)_10px,rgba(255,120,0,0.2)_20px)] z-10" />
              )}

              {/* Card Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={card.imgSrc}
                  alt={card.name}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h4 className="text-xl font-semibold text-orange-400" style={{ fontFamily: "Cinzel, serif" }}>
                  {card.name}
                </h4>
                
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2">
                    <img
                      src="/diamond.png"
                      alt="points"
                      className="w-5 h-5"
                    />
                    <span className="text-lg font-medium">{card.points}</span>
                  </p>
                  
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${card.difficulty.toLowerCase() === "easy" 
                      ? "bg-green-500/20 text-green-400" 
                      : card.difficulty.toLowerCase() === "medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"}`}
                  >
                    {card.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => handleRoundClick(card)}
                  className={`w-full py-2.5 mt-4 rounded-lg font-medium transition-all duration-300
                    ${completedRounds.includes(card.id)
                      ? "bg-orange-700/50 text-white/70"
                      : "bg-orange-700 text-white hover:bg-orange-600"}`}
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  Round {card.id}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Hint />
    </div>
  );
}

export default Rounds;
