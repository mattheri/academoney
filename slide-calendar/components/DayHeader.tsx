"use client";

const DayHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-7  gap-1">
      {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day, index) => (
        <div
          key={day}
          className={`text-center font-bold mt-4 ${
            index === 5 || index === 6 ? "bg-gray-200 mb-3 p-2" : ""
          }`}
        >
          {day}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DayHeader;
