import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const BasicDayPicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <h1>Select a Day</h1>
      <DayPicker onDayClick={handleDayClick} />
      {selectedDay && (
        <p>You selected: {selectedDay.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default BasicDayPicker;
