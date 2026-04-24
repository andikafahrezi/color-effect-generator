import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import MainTabs from "./components/MainTabs";
import Toast from "./components/Toast";
import PalettePanel from "./panels/PalettePanel";
import GradientPanel from "./panels/GradientPanel";
import GlassPanel from "./panels/GlassPanel";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("palette");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const panelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const tabContent = {
    palette: <PalettePanel showToast={handleShowToast} />,
    gradient: <GradientPanel showToast={handleShowToast} />,
    glass: <GlassPanel showToast={handleShowToast} />,
  };

  return (
    <>
      <Header />
      <main className="app-main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MainTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </main>

      <Toast message={toastMessage} show={showToast} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;