import { useEffect, useState } from "react";
export default function Input({id,label,type,register,error}:any){


    useEffect(()=>{
        console.log("error",error);
    },[error])
    
    return(
        <>
         {type === 'checkbox' ? (
            <>
         <p className="text-lg mt-6 font-semibold">{label}</p>
        <input
            type={type}
            id={id}
            {...register(id)}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
          />
          {error && (
            <p className='error'>
              {error}
            </p>
          )}
          </>
      )
         : type === 'textarea' ? (<>
         <p className="text-lg mt-6 font-semibold">{label}</p>
         
         <textarea
             type={type}
             id={id}
             {...register(id)}
             autoComplete={id}
             className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
           ></textarea>
           {error && (
             <p className='error'>
               {error}
             </p>
           )}
           </>
         )
         : (
        <>
        <p className="text-lg mt-6 font-semibold">{label}</p>
        
        <input
            type={type}
            id={id}
            {...register(id)}
            autoComplete={id}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:bg-red-200`}
            defaultValue={(type === "number") ?"0" : ""}
            min={(type === "number") ?"0" : ""}
          />
          {error && (
            <p className='error'>
              {error}
            </p>
          )}
        </>)}
       </>
    )
}