// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";


// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";

// COMPONENTS
import Nav from "./Components/Nav";


function App() {
  // State for showing/hiding the nav. Hide nav when the Error page is active.
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    applyTheme();
  }); 
  
  const handleThemeChange = (theme) => {
    setTheme(theme);
    applyTheme();
  }
 
  return (
    <main className="h-screen w-full">
      <Router>
        {showNav && <Nav handleThemeChange={handleThemeChange} />}
        <Routes>
          <Route path="/" element={<Home setShowNav={setShowNav} />} />
          <Route path={"*"} element={<FourOFour setShowNav={setShowNav} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
