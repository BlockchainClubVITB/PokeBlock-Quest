import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import roundHintData from "./roundhint"; // Importing round-specific data

const RoundHint = ({ round }) => {
  const [isOpen, setIsOpen] = useState(false);
  const roundData = roundHintData[round] || {};

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-3 text-black">{roundData.title || "Round Hint"}</h2>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {roundData.description || "No hints available for this round."}
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
        className="bg-green-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <IoMdInformationCircleOutline size={30} />
      </motion.button>
    </div>
  );
};

export default RoundHint;
