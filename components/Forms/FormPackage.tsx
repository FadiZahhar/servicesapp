'use client'

import { useState, useRef } from 'react'

import { z } from 'zod'
import { packageSchema } from '@/lib/packageschema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { paymentDetails } from '@/lib/data'
//import axios from 'axios'
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import DateField from '../Fields/DateField';
import ImageField from '../Fields/ImageField';

type Inputs = z.infer<typeof packageSchema>
export default function FormPackage() {
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
          {/* packageName */}
          <Input
              id="packageName"
              label="Package Name"
              type="text"
              register={register}
              error={errors.packageName?.message}
            />

            {/* please follow the pattern */}

            {/*description type textarea */}
            <Input
              id="description"
              label="Description"
              type="textarea"
              register={register}
              error={errors.description?.message}
            />
            {/*price type number */}
            <Input
              id="price"
              label="Price"
              type="number"
              register={register}
              error={errors.price?.message}
            />

            {/*paymentMethod type select*/}
            <Select
              id="paymentMethod"
              label="Payment Method"
              register={register}
              options={paymentDetails}
              error={errors.paymentMethod?.message}
              />
            {/* attachmentUrl I will handle this later since I need to create a unique component to handle image uploads */}
            <ImageField />

            {/*pickupAt:z.date() I will handle this later since I need to create a unique calendar component to handle date time picker */}


            {/*notes:z.string()*/}
            <Input
              id="notes"
              label="Notes"
              type="textarea"
              register={register}
              error={errors.notes?.message}
            />

            <button type="submit">Submint</button>
          </form>

        </div>
        </section>
    );
}