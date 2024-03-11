'use client'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import ImageField from '../Fields/ImageField';
import { paymentDetails } from '@/lib/data';
import { firebaseConfig } from '../../firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Inputs = {
  packageName: string;
  description: string;
  price: string | number;
  paymentMethod: string;
  notes: string;
};

export default function FormPackage() {
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

  const [imageFile, setImageFile] = useState<File | null>(null);

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

      let imageUrl = '';
      if (imageFile) {
        const storage = getStorage(app);
        const storageReference = ref(storage, `images/${imageFile.name}_${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageReference, imageFile);

        await uploadTask.then(async () => {
          imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
        });
      }

      const convertedData = { ...data, price: Number(data.price), imageUrl };

      const docRef = await addDoc(collection(db, 'packages'), convertedData);

      console.log('Document written with ID:', docRef.id);
      reset();
      setImageFile(null);
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error submitting form. Please try again.');
    }
  };

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const next = async () => {
    await handleSubmit(processForm)();
    window.scrollTo(0, 0);
  };

  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Package</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
          <Input
            id="packageName"
            label="Package Name"
            type="text"
            register={register}
            error={errors.packageName?.message}
          />
          <Input
            id="description"
            label="Description"
            type="textarea"
            register={register}
            error={errors.description?.message}
          />
          <Input
            id="price"
            label="Price"
            type="number"
            register={register}
            error={errors.price?.message}
          />
          <Select
            id="paymentMethod"
            label="Payment Method"
            register={register}
            options={paymentDetails}
            error={errors.paymentMethod?.message}
          />
          <ImageField setImageFile={setImageFile} />
          <Input
            id="notes"
            label="Notes"
            type="textarea"
            register={register}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
