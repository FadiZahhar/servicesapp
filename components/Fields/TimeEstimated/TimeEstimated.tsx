import './timeestimated.scss';

import React, { useState } from 'react';

// Define props interface if you need to pass any props
interface TimeEstimatedProps {
  id:string;
  label:string;
  register:any;
  error:any;
  onChange: (hours: number, minutes: number) => void; // Callback function to pass the time back to the parent component
}

const TimeEstimated: React.FC<TimeEstimatedProps> = ({ onChange,id,label,register,error}) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  // Handle change for hours and minutes
  const handleTimeChange = (value: number, type: 'hours' | 'minutes') => {
    if (type === 'hours') {
      setHours(value);
    } else {
      setMinutes(value);
    }
    onChange(hours, minutes);
    
  };

  return (
    <>
    <p className="text-lg mt-6 font-semibold">{label}</p>
    <div className="time-estimated-container">
      <div className="time-field">
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          min="0"
          max="24"
          value={hours}
          onChange={(e) => handleTimeChange(Number(e.target.value), 'hours')}
        />
      </div>
      <div className="time-field">
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          id="minutes"
          min="0"
          max="59"
          value={minutes}
          onChange={(e) => handleTimeChange(Number(e.target.value), 'minutes')}
        />
      </div>
    </div>
    <input
            type="text"
            id={id}
            {...register(id)}
            autoComplete={id}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
            defaultValue={`${hours} hours and ${minutes} minutes`}
          />
          {error && (
            <p className='error'>
              {error}
            </p>
          )}
    </>
  );
};

export default TimeEstimated;
