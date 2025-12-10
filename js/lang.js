async function loadLanguage(lang) {
  try {
    const response = await fetch(`/lang/${lang}.json`);
    const data = await response.json();

    i18next.init({
      lng: lang,
      debug: false,
      resources: {
        [lang]: { translation: data },
      },
    }, function(err, t) {
      // Update all elements with translations
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = i18next.t(key);
      });
    });

    // Update button label and save choice
    const toggleBtn = document.getElementById("lang-toggle");
    toggleBtn.textContent = lang === "es" ? "PT" : "ES";
    localStorage.setItem("lang", lang);

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Load saved language or detect browser preference
const savedLang = localStorage.getItem("lang") ||
                  (navigator.language.startsWith("pt") ? "pt" : "en");

loadLanguage(savedLang);

// Handle toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
  const currentLang = localStorage.getItem("lang") || "es";
  const newLang = currentLang === "es" ? "pt" : "es";
  loadLanguage(newLang);
});
