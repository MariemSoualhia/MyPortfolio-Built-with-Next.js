"use client";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("fr");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "fr";
    setLocale(savedLang);

    // Dynamically import the JSON file based on the selected language
    import(`../locales/${savedLang}.json`)
      .then((module) => setMessages(module.default))
      .catch(() =>
        console.error(`Could not load translations for ${savedLang}`)
      );
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="fr">
      {children}
    </IntlProvider>
  );
}
