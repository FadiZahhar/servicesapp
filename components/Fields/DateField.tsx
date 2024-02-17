import { FC, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Input from './Input';

interface DateFieldProps {
  id:string;
  label:string;
  register:any;
  error:any;
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const  DateField:FC<DateFieldProps> = ({id,label,register,error}) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
    <p className="text-lg mt-6 font-semibold">{label}</p>
    <DatePicker onChange={onChange} value={value} 
    className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
    />
   <input
   type="text"
               id={id}
               {...register(id)}
   value={value}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
          />
          {error && (
            <p className='error'>
              {error}
            </p>
          )}
    </>
  );
}

export default DateField;