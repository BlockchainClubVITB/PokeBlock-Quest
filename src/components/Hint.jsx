import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Hint = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          
          <div className="relative h-full flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl 
                          w-full max-w-2xl max-h-[85vh] overflow-hidden border border-gray-700">
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
                    <IoMdInformationCircleOutline />
                    Rules & Guidelines
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-gray-400 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
           
              </div>

              {/* Content Area */}
              <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar space-y-8">
                {/* Welcome Section */}
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <h3 className="font-bold text-orange-300 mb-2">Welcome to Pokeblock Quest!</h3>
                    <p className="text-sm leading-relaxed text-gray-200">
                      Gear up, cyber-trainers! 🏆 Your mission is to capture hidden flags, solve thrilling cybersecurity puzzles, 
                      and collect Diamonds 💎 to become the ultimate Pokeblock champion. But beware—only those who follow the 
                      Trainer Code will reach the top!
                    </p>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <h3 className="font-bold text-orange-300 mb-3">Diamonds & Points</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-green-500/20 p-3 rounded-lg">
                        <div className="font-bold text-green-400">Easy</div>
                        <div className="text-xl flex items-center justify-center gap-2">
                          30 <img src="/diamond.png" alt="diamond" className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="bg-orange-500/20 p-3 rounded-lg">
                        <div className="font-bold text-orange-400">Medium</div>
                        <div className="text-xl flex items-center justify-center gap-2">
                          60 <img src="/diamond.png" alt="diamond" className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="bg-red-500/20 p-3 rounded-lg">
                        <div className="font-bold text-red-400">Hard</div>
                        <div className="text-xl flex items-center justify-center gap-2">
                          100 <img src="/diamond.png" alt="diamond" className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rules Section */}
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <h3 className="font-bold text-orange-300 mb-2">Eligibility</h3>
                    <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
                      <li>Open to all trainers, whether you're a rookie Pikachu or a legendary Mewtwo of hacking.</li>
                      <li>Play solo or form a team—but choose your squad wisely!</li>
                      <li>No prior hacking experience needed—just bring your problem-solving skills!</li>
                      <li>All trainers must agree to the Cyber-Trainer Code of Conduct.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <h3 className="font-bold text-orange-300 mb-2">General Rules</h3>
                    <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
                      <li>Use of external tools is allowed unless stated otherwise in a challenge.</li>
                      <li>Sharing flags = instant disqualification. Keep your discoveries within your team!</li>
                      <li>Collaboration only within your team—seeking outside help is prohibited.</li>
                      <li>No toxic behavior. Harassment or cheating will get you disqualified. 🚫</li>
                    </ul>
                  </div>
                </div>

                {/* Prohibited Section */}
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <h3 className="font-bold text-orange-300 mb-2">Prohibited Actions</h3>
                  <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
                    <li>No brute-forcing, DoS attacks, or trying to hack the CTF platform itself.</li>
                    <li>No flag-sharing, plagiarism, or tampering with other teams' progress.</li>
                    <li>No unauthorized scripts or automation tools that bypass challenges.</li>
                    <li>Play fair and follow ethical white-hat hacking principles. 🎯</li>
                  </ul>
                </div>

                {/* Tips Section */}
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <h3 className="font-bold text-orange-300 mb-2">Trainer Tips</h3>
                  <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
                    <li>Equip your Poké-Tools: CyberChef, Burp Suite, Wireshark 🛠️</li>
                    <li>Divide tasks and strategize within your team for maximum efficiency.</li>
                    <li>Think creatively—solutions are often hidden in plain sight 🔍</li>
                    <li>Need help? Visit the Discord Help Channel (no flag-sharing!)</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-gray-700">
                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl 
                            font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 
                            shadow-lg hover:shadow-orange-500/25"
                  onClick={() => setIsOpen(false)}
                >
                  Got it, Let's Play!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <button
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full 
                  shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <IoMdInformationCircleOutline size={30} />
      </button>
    </div>
  );
};

export default Hint;