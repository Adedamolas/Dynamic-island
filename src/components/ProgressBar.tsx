// components/ProgressBar.tsx
import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ProgressBar;
