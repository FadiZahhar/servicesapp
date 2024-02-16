import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function TimeField() {
  const [value, onChange] = useState('10:00');

  return (
    <div>
      <TimePicker
  onChange={(newValue: any) => {
    // Convert newValue to string or handle null/undefined values
    if (newValue === null) {
      onChange(''); // or however you wish to handle null values
    } else {
      // Assuming newValue can be directly used or converted to string
      onChange(newValue.toString());
    }
  }}
  value={value}
/>

    </div>
  );
}

export default TimeField;