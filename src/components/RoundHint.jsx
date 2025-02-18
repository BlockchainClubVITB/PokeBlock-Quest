import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const RoundHint = ({ currentRound }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Blurred Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
          
          {/* Modal Content */}
          <div className="relative h-full flex items-center justify-center">
            <div 
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl 
                         shadow-2xl w-96 border border-gray-700"
              onClick={handleModalClick}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-orange-400">
                  {currentRound.name} Hint
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-xl mb-6">
                <div className="text-base text-gray-200 whitespace-pre-line leading-relaxed">
                  {currentRound.hint || "No hints available for this round."}
                </div>
              </div>

              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl 
                          font-semibold hover:from-orange-600 hover:to-red-600 transition-colors duration-300 
                          shadow-lg hover:shadow-orange-500/25"
                onClick={() => setIsOpen(false)}
              >
                Got it!
              </button>
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

export default RoundHint;