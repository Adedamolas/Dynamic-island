import React from "react";
import { motion } from "framer-motion";
import { PoetryFormData } from "./PoetryGenerator";

interface FormStepProps {
  formData: PoetryFormData;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onContinue: () => void;
}

const FormStep: React.FC<FormStepProps> = ({
  formData,
  handleInputChange,
  onContinue
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Tell Us About Your Poem</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="recipientName" className="block mb-2 text-sm font-medium text-gray-700">
            Who is this poem for?
          </label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Their name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-gray-700">
            What's the occasion?
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="justBecause">Just Because</option>
            <option value="apology">Apology</option>
            <option value="proposal">Proposal</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="tone" className="block mb-2 text-sm font-medium text-gray-700">
            What tone would you like?
          </label>
          <select
            id="tone"
            name="tone"
            value={formData.tone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="romantic">Romantic</option>
            <option value="playful">Playful</option>
            <option value="nostalgic">Nostalgic</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="relationshipDetails" className="block mb-2 text-sm font-medium text-gray-700">
            Tell us about your relationship
          </label>
          <textarea
            id="relationshipDetails"
            name="relationshipDetails"
            value={formData.relationshipDetails}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How long you've been together, how you met, etc."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="specialMemories" className="block mb-2 text-sm font-medium text-gray-700">
            Any special memories to include?
          </label>
          <textarea
            id="specialMemories"
            name="specialMemories"
            value={formData.specialMemories}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Special moments you've shared"
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="insideJokes" className="block mb-2 text-sm font-medium text-gray-700">
            Any inside jokes or pet names?
          </label>
          <textarea
            id="insideJokes"
            name="insideJokes"
            value={formData.insideJokes}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Optional"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Next: Choose Theme
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FormStep;