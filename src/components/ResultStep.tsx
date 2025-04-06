import React from "react";
import { motion } from "framer-motion";

interface ResultStepProps {
  generatedPoem: string;
  startOver: () => void;
  onBack?: () => void;
}

const ResultStep: React.FC<ResultStepProps> = ({
  generatedPoem,
  startOver,
  onBack,
}) => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      {...pageTransition}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Your Poem</h2>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
        <pre className="whitespace-pre-wrap font-serif text-lg">
          {generatedPoem}
        </pre>
      </div>

      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Save & Share
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={startOver}
          className="bg-gray-200 text-gray-800 py-3 rounded-full font-medium hover:bg-gray-300 transition duration-300"
        >
          Start Over
        </motion.button>

        {onBack && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="text-blue-600 py-2 font-medium"
          >
            Back to Home
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ResultStep;
