// PoetryGenerator.tsx - Main Component
import React, { useState } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FormStep from "./FormStep";
import ThemeSelectionStep from "./ThemeSelectionStep";
import LoadingStep from "./LoadingStep";
import ResultStep from "./ResultStep";

// Form data structure
export interface PoetryFormData {
  recipientName: string;
  occasion: "anniversary" | "birthday" | "justBecause" | "apology" | "proposal";
  tone: "romantic" | "playful" | "nostalgic";
  relationshipDetails: string;
  specialMemories: string;
  insideJokes: string;
}

// Component props
interface PoetryGeneratorProps {
  onBack?: () => void; // Optional callback to return to previous screen
}

const PoetryGenerator: React.FC<PoetryGeneratorProps> = ({ onBack }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<PoetryFormData>({
    recipientName: "",
    occasion: "anniversary",
    tone: "romantic",
    relationshipDetails: "",
    specialMemories: "",
    insideJokes: "",
  });
  const [selectedTheme, setSelectedTheme] = useState<string>("classic");
  const [generatedPoem, setGeneratedPoem] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form input changes with proper typing
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as PoetryFormData)
    );
  };

  // Form submission with type safety
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStep(2);
  };

  // Move to theme selection step
  const moveToThemeSelection = (): void => {
    setStep(2);
  };

  // Move to poem generation step
  const moveToGeneration = (): void => {
    setStep(3);
  };

  // Return to previous step
  const goBack = (): void => {
    setStep((prevStep) => prevStep - 1);
  };

  // Generate poem function with type safety
  const generatePoem = (): void => {
    setIsGenerating(true);
    setError(null);

    try {
      // In a real implementation, this would be an API call
      // Simulate API call with timeout
      setTimeout(() => {
        // Sample poems based on tone
        const poems: Record<PoetryFormData["tone"], string> = {
          romantic: `Dear ${formData.recipientName},\n\nIn the quiet moments between heartbeats,\nI find your name written in my soul.\nEvery sunrise reminds me of your smile,\nEvery sunset, the warmth of your embrace.\n\nThrough ${formData.relationshipDetails},\nWe've created a universe of our own.\nRemembering ${formData.specialMemories},\nI fall in love with you again and again.\n\nForever yours,`,
          playful: `Hey ${formData.recipientName}!\n\nWho needs poetry when I've got you?\n(But here's some anyway!)\n\nThrough our adventures and ${formData.relationshipDetails},\nYou've made ordinary days extraordinary.\nRemember when ${formData.specialMemories}?\nStill makes me smile!\n\nAnd yes, ${formData.insideJokes}.\nOnly we get that one! 😉\n\nCrazy about you,`,
          nostalgic: `My dearest ${formData.recipientName},\n\nTime has been our faithful companion,\nWeaving memories through ${formData.relationshipDetails}.\nI close my eyes and see us again,\n${formData.specialMemories}.\n\nThose moments etched in the amber of memory,\nGrow more precious with each passing day.\nLike when we'd say "${formData.insideJokes}"\nAnd the world was just ours alone.\n\nWith all my heart,`,
        };

        setGeneratedPoem(poems[formData.tone]);
        setIsGenerating(false);
        setStep(4);
      }, 2000);
    } catch (err) {
      setError("There was a problem generating your poem. Please try again.");
      setIsGenerating(false);
    }
  };

  const startOver = () => {
    setStep(1);
  };

  // Calculate progress percentage based on current step
  const progressPercentage = ((step - 1) / 3) * 100;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[url('/posthearts.svg')] bg-contain bg-top bg-no-repeat min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md mx-auto">
          <Header />

          <ProgressBar percentage={progressPercentage} />

          {/* Steps indicator and progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 px-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <FormStep
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onContinue={moveToThemeSelection}
            />
          )}
          {step === 2 && (
            <ThemeSelectionStep
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
              formData={formData}
              onContinue={moveToGeneration}
              onBack={goBack}
            />
          )}
          {step === 3 && (
            <LoadingStep
              isGenerating={isGenerating}
              error={error}
              generatePoem={generatePoem}
            />
          )}
          {step === 4 && (
            <ResultStep
              generatedPoem={generatedPoem}
              selectedTheme={selectedTheme}
              startOver={startOver}
              onBack={onBack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PoetryGenerator;