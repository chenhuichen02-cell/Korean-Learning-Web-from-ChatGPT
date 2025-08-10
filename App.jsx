import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        Korean Learner App
      </motion.h1>
      <p className="mt-4">🚀 Your interactive Korean learning journey starts here!</p>
    </div>
  );
}
