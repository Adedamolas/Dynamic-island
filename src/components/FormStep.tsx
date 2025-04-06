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
}

const FormStep: React.FC<FormStepProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
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
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Poem</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipient's Name</label>
          <input
            type="text"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Occasion</label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="justBecause">Just Because</option>
            <option value="apology">Apology</option>
            <option value="proposal">Proposal</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tone</label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="romantic">Romantic</option>
            <option value="playful">Playful</option>
            <option value="nostalgic">Nostalgic</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Relationship Details
          </label>
          <textarea
            name="relationshipDetails"
            value={formData.relationshipDetails}
            onChange={handleInputChange}
            placeholder="How long you've been together, how you met..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Special Memories</label>
          <textarea
            name="specialMemories"
            value={formData.specialMemories}
            onChange={handleInputChange}
            placeholder="Favorite moments, trips, experiences..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Inside Jokes (Optional)
          </label>
          <textarea
            name="insideJokes"
            value={formData.insideJokes}
            onChange={handleInputChange}
            placeholder="Any inside jokes or phrases special to you both..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Create My Poem
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FormStep;
