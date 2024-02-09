"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import Spinner from "@/components/Spinner"; // Ensure this component is also converted to TypeScript
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"; // Ensure the Firebase config is properly typed if needed
import { useRouter } from "next/navigation";

interface FormData {
  type: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  furnished: boolean;
  address: string;
  description: string;
  offer: boolean;
  regularPrice: number;
  discountedPrice: number;
  latitude: number;
  longitude: number;
  images: FileList | null;
}

export default function CreatePackage() {
  const router = useRouter();
  const auth = getAuth();
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
    images: null,
  });

  const onChange = (e:any) => {
    let value: boolean | string | FileList = e.target.value;

    
    // Specifically handle the case for input elements where the type is checkbox
    if (e.target instanceof HTMLInputElement) {
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        } else if (e.target.type === "file") {
            value = e.target.files;
        }
    }


    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Your submit logic remains the same
    // Make sure to adjust any part of the logic that doesn't fit TypeScript's type safety

    setLoading(false);
    // After your logic, use Next.js router to navigate
    // router.push(`/category/${formData.type}/${docRef.id}`); // Adjust according to your logic
  };

  if (loading) {
    return <Spinner />;
  }

  // Your JSX remains the same
  return (
    <main className="max-w-md px-2 mx-auto">
    <h1 className="text-3xl text-center mt-6 font-bold">Create a Package</h1>
    <form onSubmit={onSubmit}>
      <p className="text-lg mt-6 font-semibold">Package Type</p>
      <div className="flex">
        <button
          type="button"
          id="type"
          value="basic"
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.type === "basic"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Basic
        </button>
        <button
          type="button"
          id="type"
          value="standard"
          onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.type === "standard"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Standard
        </button>
        <button
          type="button"
          id="type"
          value="premium"
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.type === "premium"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Premium
        </button>
        <button
          type="button"
          id="type"
          value="custom"
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.type === "custom"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Custom
        </button>
      </div>
      <p className="text-lg mt-6 font-semibold">Package Name</p>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Name"
        maxLength={32}
        minLength={10}
        required
        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
      />
      <p className="text-lg mt-6 font-semibold">Payment Method</p>
      <div className="flex">
        <button
          type="button"
          id="paymentmethod"
          value="omt"
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            !formData.furnished ? "bg-white text-black" : "bg-slate-600 text-white"
          }`}
        >
          OMT
        </button>
        <button
          type="button"
          id="paymentmethod"
          value="bob"
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.furnished ? "bg-white text-black" : "bg-slate-600 text-white"
          }`}
        >
          BOB
        </button>

        <button
          type="button"
          id="paymentmethod"
          value="wish"
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.furnished ? "bg-white text-black" : "bg-slate-600 text-white"
          }`}
        >
          WISH
        </button>
      </div><br/>
      <p className="text-lg font-semibold">Package Objective</p>
      <textarea
        id="description"
        value={formData.description}
        onChange={onChange}
        placeholder="Description"
        required
        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
      />
      <div className="flex items-center mb-6">
        <div className="">
          <p className="text-lg font-semibold">Regular price</p>
          <div className="flex w-full justify-center items-center space-x-6">
            <input
              type="number"
              id="regularPrice"
              value={formData.regularPrice}
              onChange={onChange}
              min="50"
              max="400000000"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
              <div className="">
                <p className="text-md w-full whitespace-nowrap">$ / Package</p>
              </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold">Images</p>
        <p className="text-gray-600">
          The first image will be the cover (max 6)
        </p>
        <input
          type="file"
          id="images"
          onChange={onChange}
          accept=".jpg,.png,.jpeg"
          multiple
          required
          className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
        />
      </div>
      <button
        type="submit"
        className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Create Package
      </button>
    </form>
  </main>
  );
}
