"use client";

import React from "react";
import MonthList from "./MonthList";
import SlideMonthModal from "../modals/SlideMonthModal";

const SlideCalendarBox: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MonthList />
      <SlideMonthModal />
    </div>
  );
};

export default SlideCalendarBox;
