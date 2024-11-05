import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const RangeSelection = () => {
  const [range, setRange] = useState({ from: null, to: null });

  const handleDayClick = (day) => {
    if (range.from && range.to) {
      setRange({ from: day, to: null }); // reset if both dates are selected
    } else if (range.from) {
      setRange({ ...range, to: day }); // set the end date
    } else {
      setRange({ from: day, to: null }); // set the start date
    }
  };

  return (
    <div>
      <h1>Select a Date Range</h1>
      <DayPicker
        mode="range"
        selected={range}
        onDayClick={handleDayClick}
      />
      {range.from && range.to && (
        <p>
          Selected range: {range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default RangeSelection;
