
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const MultipleDaysSelection = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    const selectedIndex = selectedDays.findIndex(selectedDay =>
      selectedDay.toDateString() === day.toDateString()
    );

    if (selectedIndex >= 0) {
      const newSelectedDays = selectedDays.filter((_, index) => index !== selectedIndex);
      setSelectedDays(newSelectedDays); // Deselect the day
    } else {
      setSelectedDays([...selectedDays, day]); // Select the day
    }
  };

  return (
    <div>
      <h1>Select Multiple Days</h1>
      <DayPicker
        mode="multiple"
        selected={selectedDays}
        onDayClick={handleDayClick}
      />
      {selectedDays.length > 0 && (
        <p>
          Selected days: {selectedDays.map(day => day.toLocaleDateString()).join(', ')}
        </p>
      )}
    </div>
  );
};

export default MultipleDaysSelection;
