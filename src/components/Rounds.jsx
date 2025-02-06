import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, Query } from "../utils/Config";
import RoundsData from "./RoundsData";
import { useAuth } from "../context/AuthContext";

function Rounds() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const roundData = RoundsData();
  const [score, setScore] = useState(0);
  const [completedRounds, setCompletedRounds] = useState([]);

  const DATABASE_ID = "6749aaef0034b73295d6";
  const COLLECTION_ID = "679656b300020ec3e00b";

  useEffect(() => {
    if (user) {
      database
        .listDocuments(DATABASE_ID, COLLECTION_ID, [
          Query.equal("team_name", user?.name),
        ])
        .then((response) => {
          const documents = response.documents || [];
          const totalScore = documents.reduce(
            (acc, doc) => acc + (doc.points_awarded || 0),
            0
          );
          setScore(totalScore);
          const completedRoundIds = documents.map(doc => doc.round_id);
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
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <div className="flex justify-end p-4 gap-4">
        {user && (
          <>
            <div className=" bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9414/9414696.png"
                className="w-6 h-6"
                alt="score icon"
              />
              <span>{score}</span>
            </div>
            <button
              onClick={logoutUser}
              className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-md flex items-center gap-2 transition-shadow shadow-lg"
            >
              <img src="/logout.png" alt="logout" className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </>
        )}
      </div>

      <div className="container mx-auto px-4">
        <div
          className="text-7xl text-orange-700 font-semibold text-center py-8"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Rounds
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto">
          {roundData.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg my-6 w-52 group 
                          ${completedRounds.includes(card.id) ? 'overflow-hidden' : ''}`}
            >
              {completedRounds.includes(card.id) && (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,120,0,0.2)_10px,rgba(255,120,0,0.2)_20px)] z-10" />
              )}
              <div className="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  src={card.imgSrc}
                  alt="profile"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                  {card.name}
                </h4>
                <p className="text-lg font-semibold text-slate-500 uppercase flex items-center justify-center gap-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/9414/9414696.png" 
                    alt="points" 
                    className="w-6 h-6"
                  />
                  {card.points}
                  
                </p>
                <p className="text-sm font-semibold text-slate-500 uppercase">
                  Difficulty: {card.difficulty}
                </p>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <button
                  type="button"
                  className={`bg-orange-700 text-white rounded-md px-4 py-2 my-2 transition-colors shadow-lg hover:bg-orange-800 font-medium
                             ${completedRounds.includes(card.id) ? 'opacity-75' : ''}`}
                  style={{ fontFamily: "Cinzel, serif" }}
                  onClick={() => handleRoundClick(card)}
                >
                  Round {card.id}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rounds;
