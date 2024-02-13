import { useState } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | string | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function TimeRangeField() {
  const [value, onChange] = useState<Value>(['10:00', '11:00']);

  return (
    <div>
      <TimeRangePicker onChange={onChange} value={value} />
    </div>
  );
}

export default TimeRangeField;