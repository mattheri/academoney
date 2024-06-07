"use client";

import { useSlideCalendar } from "../context/slideCalendarContext";

const NextButton: React.FC = () => {
  const { handleNext } = useSlideCalendar();

  return (
    <button onClick={handleNext} className="p-2 bg-gray-200 rounded">
      &gt;
    </button>
  );
};

export default NextButton;
