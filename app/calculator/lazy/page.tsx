"use client";

import { useState } from "react";

import Calculator, { useCalculatorInit } from "@/calculator";

export default function AutoCalculator() {
  const [isActive, setIsActive] = useState(false);
  const init = useCalculatorInit();

  const onClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      init();
      setIsActive(true);
    }
  };

  return (
    <main>
      <button type="button" onClick={onClick}>
        {isActive ? "Is Activated" : "Activate"}
      </button>

      <Calculator focusKeyboardInputs={isActive} />
    </main>
  );
}
