import React from "react";
import { motion } from "framer-motion";
import { PoetryFormData } from "./PoetryGenerator"; 

// Theme data structure
interface PoemTheme {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  backgroundColor: string;
  accentColor: string;
  fontFamily: string;
  backgroundPattern?: string;
}

interface ThemeSelectionProps {
  selectedTheme: string;
  setSelectedTheme: (themeId: string) => void;
  formData: PoetryFormData;
  onContinue: () => void;
  onBack: () => void;
}

const ThemeSelectionStep: React.FC<ThemeSelectionProps> = ({
  selectedTheme,
  setSelectedTheme,
  formData,
  onContinue,
  onBack
}) => {
  // Theme options based on the occasion and tone
  const getThemesForOccasionAndTone = (occasion: string, tone: string): PoemTheme[] => {
    // Base themes available for all combinations
    const themes: PoemTheme[] = [
      {
        id: "classic",
        name: "Classic",
        description: "Timeless elegance with a clean layout",
        previewImage: "/themes/classic.png",
        backgroundColor: "#f8f9fa",
        accentColor: "#0066cc",
        fontFamily: "Georgia, serif"
      }
    ];
    
    // Add occasion-specific themes
    if (occasion === "anniversary" && tone === "romantic") {
      themes.push({
        id: "roses",
        name: "Rose Petals",
        description: "Scattered rose petals frame your heartfelt words",
        previewImage: "/themes/roses.png",
        backgroundColor: "#fff5f5",
        accentColor: "#e53e3e",
        fontFamily: "Playfair Display, serif",
        backgroundPattern: "url('/patterns/rose-petals.svg')"
      });
    }
    
    if (tone === "nostalgic") {
      themes.push({
        id: "vintage",
        name: "Vintage Memories",
        description: "Sepia-toned backdrop reminiscent of treasured photographs",
        previewImage: "/themes/vintage.png",
        backgroundColor: "#f8f0e3",
        accentColor: "#8c7851",
        fontFamily: "Libre Baskerville, serif",
        backgroundPattern: "url('/patterns/vintage-paper.svg')"
      });
    }
    
    if (occasion === "birthday" || tone === "playful") {
      themes.push({
        id: "celebration",
        name: "Celebration",
        description: "Festive and colorful design to mark special occasions",
        previewImage: "/themes/celebration.png",
        backgroundColor: "#f0f9ff",
        accentColor: "#3b82f6",
        fontFamily: "Quicksand, sans-serif",
        backgroundPattern: "url('/patterns/confetti.svg')"
      });
    }
    
    return themes;
  };
  
  const availableThemes = getThemesForOccasionAndTone(formData.occasion, formData.tone);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Choose a Theme</h2>
      <p className="text-gray-600 text-center mb-6">
        Select a visual style for your poem to {formData.recipientName}
      </p>
      
      <div className="grid gap-4 mb-6">
        {availableThemes.map((theme) => (
          <motion.div
            key={theme.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedTheme === theme.id
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedTheme(theme.id)}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center text-white"
                style={{ 
                  backgroundColor: theme.accentColor,
                  backgroundImage: theme.backgroundPattern
                }}
              >
                A
              </div>
              <div>
                <h3 className="font-medium">{theme.name}</h3>
                <p className="text-sm text-gray-600">{theme.description}</p>
              </div>
              {selectedTheme === theme.id && (
                <div className="ml-auto">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-blue-500"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Continue
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="text-blue-600 py-2 font-medium"
        >
          Back to Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ThemeSelectionStep;