'use client'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebaseConfig';

import { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import ImageField from '../Fields/ImageField';
import { paymentDetails } from '@/lib/data';
import { toast } from 'react-toastify';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// type Inputs = z.infer<typeof packageSchema>;
type Inputs = {
  packageName: string;
  description: string;
  price: string | number;
  paymentMethod: string;
};


export default function FormPackage() {
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
    // resolver: zodResolver(packageSchema),
});
  

const submitForm: SubmitHandler<Inputs> = async (data) => {
  try {
    if (!data.packageName || !data.description || !data.price || !data.paymentMethod) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const minPrice = 200;
    if (Number(data.price) < minPrice) {
      toast.error(`Minimum price is ${minPrice}.`);
      return;
    }

    console.log("Form data before conversion:", data);

    const convertedData = { ...data, price: Number(data.price) };
    console.log("Form data after conversion:", convertedData);

    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'packages'), convertedData);

    console.log('Document written with ID:', docRef.id);
    console.log('DATA:', convertedData);

    reset();
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const next = async () => {
    await handleSubmit(processForm)();

    window.scrollTo(0, 0);
  };



    return(

        <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a Package</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          
          <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
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
              // error={errors.notes?.message}
            />

            <button type="submit">Submit</button>
          </form>

        </div>
        </section>
    );
}