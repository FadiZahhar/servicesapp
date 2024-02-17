export default function HourField({id,label,type,register,error}:any){
return(
    <>
    <p className="text-lg mt-6 font-semibold">{label}</p>
        
        <input
            type="number"
            id={id}
            {...register(id)}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
            defaultValue="0"
            min="0"
            max="50"
          />
          {error && (
            <p className='error'>
              {error}
            </p>
          )}
    </>
)
}