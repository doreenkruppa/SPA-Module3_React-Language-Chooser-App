import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const [language, setLanguage] = useState("DE");
  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Content />
        <Header />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
