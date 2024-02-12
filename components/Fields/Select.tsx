export default function Select({id,label,register,options,error}:any){

    const listItems = options.map((item:string, index:number) =>
    <option key={index} value={item}>{item}</option>
  );

    return(
        <>
        <p className="text-lg mt-6 font-semibold">{label}</p>
        <select
          id={id}
          {...register(id)}
          autoComplete={id}
          className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
        >
          {listItems}
        </select>
        {error && (
          <p className='mt-2 text-sm text-red-400'>
            {error}
          </p>
        )}
      </>
    )
}