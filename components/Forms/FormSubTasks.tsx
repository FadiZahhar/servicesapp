'use client'

import { useState, useRef } from 'react'

import { z } from 'zod'
import { packageSchema } from '@/lib/packageschema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'


type Inputs = z.infer<typeof packageSchema>
export default function FormSubTasks() {
    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = () => {
        if (formRef.current) {
          formRef.current.preventDefault();
          formRef.current.submit();
        }
      };
    
      const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
      } = useForm<Inputs>({
        resolver: zodResolver(packageSchema)
      })

      const processForm: SubmitHandler<Inputs> = data => {
        console.log(data);
      }

      type FieldName = keyof Inputs

  const next = async () => {
        await handleSubmit(processForm)();

     // Scroll to the top of the page
     window.scrollTo(0, 0);
  }

    return(

        <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a Package</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          
          <form ref={formRef} onSubmit={handleSubmit(processForm)}>


         <button type="submit">Submint</button>
          </form>

        </div>
        </section>
    );
}