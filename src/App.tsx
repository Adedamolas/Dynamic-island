// App.tsx (modified)
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import PoetryGenerator from "./components/PoetryGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-poem" element={<PoetryGenerator />} />
      </Routes>
    </Router>
  );
}

// The landing page component (your original code)
function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[url('/posthearts.svg')] bg-contain bg-top bg-no-repeat min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row w-full justify-center py-4"
          >
            <div className="p-2 bg-gray-200 rounded-lg flex flex-row gap-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="
#0008ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-icon lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <p className="text-sm sm:text-base">Welcome</p>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-black font-vergilia"
          >
            Create memories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 text-sm sm:text-base md:text-lg"
          >
            Bridging hearts one poetic gesture at a time.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-3/4 md:max-w-md text-white font-medium py-3 sm:py-4 md:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg mb-6 sm:mb-8"
          >
            <Link
              to="/create-poem"
              className="text-white no-underline block w-full h-full"
            >
              Let's go
            </Link>
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs sm:text-sm text-gray-600 max-w-full text-center mt-4"
          >
            By using PoeticGestures, you agree to our{" "}
            <span className="font-bold">Terms of Service</span> and{" "}
            <span className="font-bold">Privacy Policy</span>.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default App;
