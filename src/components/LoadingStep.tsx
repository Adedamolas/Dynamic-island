import React from "react";
import { motion } from "framer-motion";

interface LoadingStepProps {
  isGenerating: boolean;
  error: string | null;
  generatePoem: () => void;
}

const LoadingStep: React.FC<LoadingStepProps> = ({
  isGenerating,
  error,
  generatePoem,
}) => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      {...pageTransition}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto text-center"
    >
      <h2 className="text-2xl font-bold mb-6">Creating Your Poem</h2>

      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0008ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </motion.div>

        <p className="text-gray-600">
          Crafting the perfect words just for you...
        </p>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePoem}
          className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300 mt-6"
        >
          {isGenerating ? "Creating..." : "Generate Poem"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoadingStep;
