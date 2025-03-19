"use client";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "fr";
    setLocale(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload(); // Reload page to re-import messages
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")} className="p-2">
        🇺🇸 English
      </button>
      <button onClick={() => changeLanguage("fr")} className="p-2">
        🇫🇷 Français
      </button>
    </div>
  );
}
