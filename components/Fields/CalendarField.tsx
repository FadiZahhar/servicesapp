import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalednarField({id,label,register,error}:any) {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
       <p className="text-lg mt-6 font-semibold">{label}</p>
      <Calendar onChange={onChange} value={value} 
      />
      {error && (
            <p className='error'>
              {error}
            </p>
          )}
    </>
  );
}

export default CalednarField;