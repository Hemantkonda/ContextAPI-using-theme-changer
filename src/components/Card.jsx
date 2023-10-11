import React from "react";
import useTheme from "../contexts/themeContext";

function Card() {
    const { themeMode } = useTheme();
  // Assuming you have CSS classes for light and dark themes, you can apply them like this:
  const cardClassName = `card ${themeMode}`;
  return (
    <div className={cardClassName}>
      <div className="image">
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div className="content">
        <h1>My Card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non
          facilis reiciendis cupiditate obcaecati odit velit maxime iste, quae,
          dicta modi veniam.
        </p>
      </div>
    </div>
  );
}

export default Card;
