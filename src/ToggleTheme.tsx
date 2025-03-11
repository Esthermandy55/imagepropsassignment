import { useState, useEffect } from "react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList[darkMode ? "add" : "remove"]("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`h-[40vh] p-2 border rounded-lg gap-3 ${
        darkMode
          ? "bg-black text-white border-white"
          : "bg-white text-black border-black"
      }`}
    >
      <div className="flex flex-col items-start justify-center m-4 gap-4">
        <h1 className="text-5xl font-semibold">Toggle Theme</h1>
        <div>
          <p className="before:content-['•'] before:mr-2">
            Implements a light/dark mode switch using useState.
          </p>
          <p className="before:content-['•'] before:mr-2">
            Toggles a CSS class when the theme changes.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center mt-10 mx-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 border-2 rounded-md transition duration-300 ${
            darkMode ? "border-white" : "border-black"
          }`}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
