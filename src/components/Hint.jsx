import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Hint = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-bounce"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-3 text-black">Rules & Guidelines</h2>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              <div>
                <h3 className="font-bold">Rules & Guidelines: Pokeblock Quest CTF</h3>
                <p>
                  Welcome to Pokeblock Quest!
                  Gear up, cyber-trainers! 🏆 Your mission is to capture hidden flags, solve thrilling cybersecurity puzzles, and collect Diamonds 💎 to become the ultimate Pokeblock champion. But beware—only those who follow the Trainer Code will reach the top. Read the rules, strategize wisely, and let the quest begin!
                </p>
              </div>
              <div>
                <h3 className="font-bold">Eligibility</h3>
                <p>
                  - Open to all trainers, whether you're a rookie Pikachu or a legendary Mewtwo of hacking.
                  - Play solo or form a team—but choose your squad wisely!
                  - No prior hacking experience needed. Just bring your problem-solving skills, curiosity, and a Poké-sized thirst for adventure.
                  - All trainers must register and agree to the Cyber-Trainer Code of Conduct—we play fair and for fun!
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-4">General Rules</h3>
                <p>
                  - Use of external tools is allowed unless stated otherwise in a challenge. If it helps crack the puzzle, go for it!
                  - Sharing flags = instant disqualification. Keep your discoveries within your team—no leaks, no snitching! 🚫
                  - Collaboration only within your team—seeking outside help is like using a Master Ball on a Caterpie… just unnecessary and unfair.
                  - No toxic behavior. Pokémon battles can get heated, but this is a friendly quest. Harassment, cheating, or unsportsmanlike behavior will get you Team Rocket-blasted out of the competition. 🚀💥
                  - Only the one member of a team submits flags—so double-check before hitting that enter key!
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-4">Prohibited Actions</h3>
                <p>
                  - Brute-forcing, DoS attacks, or trying to hack the CTF platform itself? Nope, that’s like using Explosion on your own Pokémon. Don’t do it.
                  - No flag-sharing, plagiarism, or tampering with other teams’ progress. If we catch you, say goodbye to your Pokédex of Diamonds. 💎❌
                  - No unauthorized scripts/tools that bypass challenges—this is a test of skill, not shortcuts!
                  - Play fair, think smart, and follow ethical white-hat hacking principles—because no one likes a villain (unless you’re Giovanni, but even he plays by some rules).
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-4">Diamonds & Challenges</h3>
                <p>
                  Your ultimate goal? Solve challenges, capture flags, and collect Diamonds!
                  🟢 Easy: 30 Diamonds
                  🟠 Medium: 60 Diamonds
                  🔴 Hard: 100 Diamonds
                  Each challenge is infused with Pokémon magic, from Cryptography and Web Exploitation to Reverse Engineering, Forensics, and OSINT. Sharpen your claws, test your trainer instincts, and prove your cyber-skills!
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-4">Trainer Tips</h3>
                <p>
                  - Equip your Poké-Tools: CyberChef, Burp Suite, Wireshark, and others to boost your skills like X-Attack!
                  - Divide tasks and strategize—your team is your squad, and teamwork wins battles.
                  - Think like a legendary Pokémon—the solution is often hidden in plain sight. 🔍
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-4">Support & Assistance</h3>
                <p>
                  - Stuck on a challenge? Visit the Discord Help Channel for hints (but no flag-sharing, of course!).
                  - Stay respectful, fair, and in the spirit of adventure—only the best cyber-trainers will reach the top!
                </p>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <IoMdInformationCircleOutline size={30} />
      </motion.button>
    </div>
  );
};

export default Hint;