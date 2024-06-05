"use client";

import { useSlideCalendar } from "../context/slideCalendarContext";

const PrevButton: React.FC = () => {
  const { handlePrev } = useSlideCalendar();

  return (
    <button onClick={handlePrev} className="p-2 bg-gray-200 rounded">
      &lt;
    </button>
  );
};

export default PrevButton;
