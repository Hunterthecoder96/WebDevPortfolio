import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "../Styles/Intro.css";

export default function Intro() {
  const [showSecondTyped, setShowSecondTyped] = useState(false);

  useEffect(() => {
    // Initialize the first Typed.js effect
    const firstTypedOptions = {
      strings: [ "Welcome to my Portfolio", "<span className='different-text'>Hunter Skolnick</span>"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: false,
      showCursor: false,
      onComplete: function (self) {
        // When the first Typed.js effect completes, show the second Typed.js
        setShowSecondTyped(true);
      },
    };

    const firstTyped = new Typed(".typing", firstTypedOptions);

    // Cleanup the first Typed.js instance when the component unmounts
    return () => {
      firstTyped.destroy();
    };
  }, []);

  useEffect(() => {
    if (showSecondTyped) {
      // Initialize the second Typed.js effect
      const secondTypedOptions = {
        strings: ["Full-Stack Web Developer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: false,
        showCursor: false,
      };

      new Typed(".second-typing", secondTypedOptions);
    }
  }, [showSecondTyped]);

  return (
    <div className="intro-container">
      <span className="typing"></span>
      {showSecondTyped && <span className="second-typing"></span>}
    </div>
  );
}
