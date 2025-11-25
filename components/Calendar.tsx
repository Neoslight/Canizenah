
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, XCircle, CheckCircle } from 'lucide-react';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper to get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper to get start day of week (0-6, 0 is Sunday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    // Adjust to make Monday = 0, Sunday = 6
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Simulation of full dates (e.g., specific days or weekends)
  const isDateFull = (day: number) => {
    // For demo: Randomly mark some days as full based on a simple hash
    // In a real app, this would check against a database
    const checkDate = new Date(year, month, day);
    // Example: Weekends (Sat/Sun) are often busy, or specific random dates
    return (day + month) % 7 === 0 || (day % 5 === 0 && day % 2 !== 0); 
  };

  const isPast = (day: number) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const checkDate = new Date(year, month, day);
    return checkDate < today;
  };

  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before start of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 w-full"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const full = isDateFull(day);
      const past = isPast(day);
      const dateObj = new Date(year, month, day);

      let cellClass = "h-12 w-full flex items-center justify-center rounded-lg text-sm font-semibold transition-all ";
      let content = null;

      if (past) {
        cellClass += "text-gray-300 cursor-not-allowed";
        content = <span>{day}</span>;
      } else if (full) {
        // Peach color for Full, with dark red/orange text for contrast
        cellClass += "bg-peach/50 text-red-900 cursor-not-allowed border border-peach";
        content = (
          <div className="flex flex-col items-center">
            <span>{day}</span>
            <span className="text-[9px] uppercase font-bold leading-none mt-1">Complet</span>
          </div>
        );
      } else {
        // Willow color for Available, with dark green text for contrast
        cellClass += "bg-willow text-primary hover:bg-willow/80 hover:shadow-md cursor-pointer border border-willow/50";
        content = (
          <div 
            onClick={() => onDateSelect(dateObj)}
            className="w-full h-full flex items-center justify-center"
            title="Réserver cette date"
          >
            {day}
          </div>
        );
      }

      days.push(
        <div key={day} className="p-1">
          <div className={cellClass}>
            {content}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex justify-between items-center">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-white/20 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <span className="font-display font-bold text-lg capitalize">
          {monthNames[month]} {year}
        </span>
        <button onClick={handleNextMonth} className="p-1 hover:bg-white/20 rounded-full transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 bg-secondary p-2 border-b border-gray-200">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
          <div key={i} className="text-center text-xs font-bold text-gray-500">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 p-2">
        {renderDays()}
      </div>

      {/* Legend */}
      <div className="px-4 pb-4 pt-2 flex justify-center gap-6 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-willow border border-willow rounded-sm"></div>
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-peach/50 border border-peach rounded-sm"></div>
          <span>Complet</span>
        </div>
      </div>
    </div>
  );
};