import React, { useRef } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";

interface ResultStepProps {
  generatedPoem: string;
  selectedTheme: string;
  startOver: () => void;
  onBack?: () => void;
}

// Helper function to get theme styles based on theme ID
const getThemeStyles = (themeId: string) => {
  const themes = {
    classic: {
      backgroundColor: "#f8f9fa",
      accentColor: "#0066cc",
      fontFamily: "Georgia, serif",
      backgroundPattern: ""
    },
    roses: {
      backgroundColor: "#fff5f5", 
      accentColor: "#e53e3e",
      fontFamily: "Playfair Display, serif",
      backgroundPattern: "url('/patterns/rose-petals.svg')"
    },
    vintage: {
      backgroundColor: "#f8f0e3",
      accentColor: "#8c7851",
      fontFamily: "Libre Baskerville, serif",
      backgroundPattern: "url('/patterns/vintage-paper.svg')"
    },
    celebration: {
      backgroundColor: "#f0f9ff",
      accentColor: "#3b82f6",
      fontFamily: "Quicksand, sans-serif",
      backgroundPattern: "url('/patterns/confetti.svg')"
    }
  };
  
  return themes[themeId as keyof typeof themes] || themes.classic;
};

const ResultStep: React.FC<ResultStepProps> = ({
  generatedPoem,
  selectedTheme,
  startOver,
  onBack
}) => {
  const poemRef = useRef<HTMLDivElement>(null);
  const themeStyles = getThemeStyles(selectedTheme);
  
  const handleDownload = async () => {
    if (poemRef.current) {
      try {
        const canvas = await html2canvas(poemRef.current);
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my-poem.png";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Your Poem Is Ready</h2>

      {/* Poem display with theme styling */}
      <div 
        ref={poemRef}
        className="p-6 mb-6 rounded-lg shadow-sm"
        style={{
          backgroundColor: themeStyles.backgroundColor,
          backgroundImage: themeStyles.backgroundPattern,
          fontFamily: themeStyles.fontFamily,
          border: `1px solid ${themeStyles.accentColor}30`,
          color: "#333"
        }}
      >
        <div 
          className="whitespace-pre-wrap" 
          style={{ lineHeight: 1.6 }}
        >
          {generatedPoem}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Download as Image
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startOver}
          className="w-full border border-blue-600 text-blue-600 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300"
        >
          Create Another Poem
        </motion.button>

        {onBack && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="text-blue-600 py-2 font-medium"
          >
            Return to Home
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ResultStep;