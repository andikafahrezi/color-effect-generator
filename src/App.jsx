import { useState } from "react";
import Header from "./components/Header.jsx";
import MainTabs from "./components/MainTabs.jsx";
import Toast from "./components/Toast.jsx";
import PalettePanel from "./panels/PalettePanel.jsx";
import GradientPanel from "./panels/GradientPanel.jsx";
import GlassPanel from "./panels/GlassPanel.jsx";
import "./App.css";
 
function App() {
  const [activeTab, setActiveTab] = useState("palette");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
 
  const handleShowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };
 
  return (
    <>
      <Header />
      <main className="app-main">
        <MainTabs activeTab={activeTab} onTabChange={setActiveTab} />
 
        {activeTab === "palette" && <PalettePanel showToast={handleShowToast} />}
        {activeTab === "gradient" && <GradientPanel showToast={handleShowToast} />}
        {activeTab === "glass" && <GlassPanel showToast={handleShowToast} />}
      </main>
 
      <Toast message={toastMessage} show={showToast} />
    </>
  );
}
 
export default App;