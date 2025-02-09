import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RoundsData from "./RoundsData";

function Rounds() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const roundData = RoundsData();
  const [showRules, setShowRules] = useState(false);

  const handleRoundClick = (card) => {
    navigate(`/round/${card.id}`, { state: { card } });
  };

  return (
    <div className="bg-zinc-950 text-white flex flex-col justify-center items-center relative">
      {/* 🔥 Rules Button (Top-Right) */}
      <button
        onClick={() => setShowRules(true)}
        className="absolute top-4 right-4 bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-md"
      >
        Rules 📜
      </button>

      {/* 📜 Rules Modal with Scroll */}
      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-3xl w-full h-4/5 flex flex-col">
            <h2 className="text-2xl font-bold text-orange-700 mb-4 text-center">
              📜 Pokeblock Quest CTF Rules & Guidelines
            </h2>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4" style={{ maxHeight: "70vh" }}>
              <p className="mb-3">
                🏆 Your mission: Solve cybersecurity puzzles, collect Diamonds 💎, and become the ultimate Pokeblock champion!
              </p>

              <h3 className="text-xl font-semibold mt-4">⚡ Eligibility</h3>
              <ul className="list-disc ml-6">
                <li>Open to all trainers, whether you're a rookie Pikachu or a legendary Mewtwo of hacking.</li>
                <li>Play solo or form a team—but choose your squad wisely!</li>
                <li>No prior hacking experience needed—just problem-solving skills & curiosity.</li>
                <li>All trainers must register and agree to the Cyber-Trainer Code of Conduct.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">📜 General Rules</h3>
              <ul className="list-disc ml-6">
                <li>Use of external tools is allowed unless restricted.</li>
                <li>Sharing flags = instant disqualification. Keep your discoveries within your team—no leaks! 🚫</li>
                <li>Collaboration only within your team—no outside help.</li>
                <li>No toxic behavior—harassment, cheating, or unsportsmanlike conduct will result in disqualification.</li>
                <li>Only one team member submits flags—double-check before hitting enter.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">❌ Prohibited Actions</h3>
              <ul className="list-disc ml-6">
                <li>No brute-forcing, DoS attacks, or hacking the platform.</li>
                <li>No flag-sharing, plagiarism, or tampering with other teams’ progress.</li>
                <li>No unauthorized scripts/tools that bypass challenges—this is a test of skill, not shortcuts!</li>
                <li>Follow ethical hacking principles.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">💎 Diamonds & Challenges</h3>
              <ul className="list-disc ml-6">
                <li>🟢 Easy: 30 Diamonds</li>
                <li>🟠 Medium: 60 Diamonds</li>
                <li>🔴 Hard: 100 Diamonds</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">🎮 Trainer Tips</h3>
              <ul className="list-disc ml-6">
                <li>Equip your Poké-Tools: CyberChef, Burp Suite, Wireshark, and others.</li>
                <li>Divide tasks and strategize—teamwork wins battles.</li>
                <li>Think like a legendary Pokémon—the solution is often hidden in plain sight. 🔍</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">📢 Support & Assistance</h3>
              <p>Stuck on a challenge? Visit the Discord Help Channel for hints (but no flag-sharing!).</p>
              <p>Stay respectful, fair, and in the spirit of adventure—only the best cyber-trainers will reach the top!</p>

              <p className="mt-4 font-bold text-center">Good luck, trainers! 🎮💎🔥</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowRules(false)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md self-center"
            >
              Close ❌
            </button>
          </div>
        </div>
      )}

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
