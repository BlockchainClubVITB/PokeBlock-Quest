import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import RoundsData from "./RoundsData";

function Rounds() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const roundData = RoundsData();

  const handleRoundClick = (card) => {
    navigate(`/round/${card.id}`, { state: { card } });
  };

  return (
    <div className="bg-zinc-950 text-white flex flex-col justify-center items-center">
      <div className="">
        <div
          className="text-7xl text-orange-700 font-semibold text-center pt-3"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Rounds
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {roundData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52"
            >
              <div className="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={card.imgSrc}
                  alt="profile-picture"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                  {card.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500 uppercase">
                  Points : {card.points}
                </p>
                <p className="text-sm font-semibold text-slate-500 uppercase">
                  Difficulty : {card.difficulty}
                </p>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <button
                  type="button"
                  className="bg-orange-700 hover:bg-orange-800 duration-200 rounded-md px-4 py-2 my-2"
                  onClick={() => handleRoundClick(card)}
                >
                  Round {card.id}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="links--wrapper bg-black">
        {user ? (
          <>
            <button
              onClick={logoutUser}
              className="inline-block cursor-pointer bg-orange-700 text-white px-4 py-2 transition-colors duration-300 border border-black no-underline hover:bg-white hover:text-black"
              to="/"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="inline-block cursor-pointer bg-black text-white px-4 py-2 transition-colors duration-300 border border-black no-underline hover:bg-white hover:text-black"
            to="/"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Rounds;
