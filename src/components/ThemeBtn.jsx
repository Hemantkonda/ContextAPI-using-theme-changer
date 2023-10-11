import React, { useState } from "react";
import useTheme from "../contexts/themeContext";

const ThemeBtn = () => {
  const { lightTheme, darkMode, themeMode } = useTheme();

  const changeBtn = () => {
    // Check the current themeMode to determine if it's dark
    if (themeMode === "bg-black") {
      lightTheme(); // Change to light theme
    } else {
      darkMode(); // Change to dark theme
    }
  };

  return (
    <div>
      {" "}
      <label htmlFor="themeBtn">{themeMode}</label>
      <input
        type="checkbox"
        name="themeBtn"
        className="themeCard"
        onChange={changeBtn}
        checked={themeMode === "bg-black"}
      />
    </div>
  );
};

export default ThemeBtn;
