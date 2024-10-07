import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function WelcomeMessage() {
  const { language } = useContext(LanguageContext);
  const messages = {
    DE: "'An meiner Wimper hängt ein Stern, es ist so hell, wie soll ich schlafen...'",
    US: "'A star hangs on my eyelash, It is so bright, How shall I sleep...'",
    TR: "''Kirpiğimde bir yıldız asılı, O kadar parlak ki, Nasıl uyuyayım...' ",
    IR: "نجمة معلقة على رموشي، كيف لي أن أنام إيلاس لاسكر شولر",
    FR: "Une étoile est accrochée à mon cil, Il fait si clair, Comment pourrais-je dormir...'",
    SP: "'En mi pestaña cuelga una estrella, Es tan brillante, Cómo voy a dormir...'",
    NL: "'Aan mijn wimper hangt een ster, Hij is zo helder, Hoe zal ik slapen...' - ",
  };
  return (
    <div id="content">
      <h1>- sparkling poetry -</h1>
      <h2>Else Lasker-Schüler</h2>
      <p>{messages[language]}</p>
    </div>
  );
}
