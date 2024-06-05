// src/app/page.tsx
"use client";

import { SlideCalendarProvider } from "../../slide-calendar/context/slideCalendarContext";
import SlideCalendarBox from "../../slide-calendar/components/SlideCalendarBox";

const Home: React.FC = () => {
  return (
    <div>
      <SlideCalendarProvider>
      <SlideCalendarBox />
    </SlideCalendarProvider>
  </div>
  );
};

export default Home;
