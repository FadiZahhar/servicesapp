"use client"
import { Auth, User, getAuth, updateProfile } from "firebase/auth";
import {
    DocumentData,
    Firestore,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { RxLapTimer } from "react-icons/rx";
import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

export default function Profile() {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const auth = getAuth();
  const [changeDetail, setChangeDetail] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    profileType: '',
    phoneNumber:'',
    dateOfBirth:'',
    profilePicture:'',
    address:'',
    biography:'',
    gender:'',
    Nationality:'',
    /* company */
    typeOfBusiness:'',
    registrationNumber:'',
    websiteUrl:'',
    oporatingHours:''
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    router.push('/');
  }
  function onChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(name: string, auth: Auth, db: Firestore): Promise<void> {
    try {
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        throw new Error("No authenticated user.");
      }
  
      if (currentUser.displayName !== name) {
        // Update display name in Firebase Auth
        await updateProfile(currentUser, {
          displayName: name,
        });
  
        // Update name in Firestore
        const docRef = doc(db, "users", currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
  
      toast.success("Profile details updated");
    } catch (error) {
      console.error("Could not update the profile details", error);
      toast.error("Could not update the profile details");
    }
  }
  
  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser?.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      /*let listings: SetStateAction<null> | { id: string; data: DocumentData; }[] = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);*/
      setLoading(false);
    }
    //fetchUserListings();
  }, [auth.currentUser?.uid]);

  const onSubmit2 = data => {
    console.log(data);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form onSubmit={handleSubmit(onSubmit2)}>
            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={(name) ? name : ''}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={(email) ? email : ''}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />




            <p className="text-lg mt-6 font-semibold">Profile Type</p>
      <div className="flex">
        <button
          type="button"
          id="profileType"
          value="personal"
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.profileType === "personal"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Personal
        </button>
        <button
          type="button"
          id="profileType"
          value="business"
          onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            formData.profileType === "business"
              ? "bg-white text-black"
              : "bg-slate-600 text-white"
          }`}
        >
          Business
        </button>
        </div><br/>


        {/* phone number */}
        <p className="text-lg mt-6 font-semibold">Phone Number</p>
      <input
        id="phoneNumber"
        {...register("phoneNumber", {
          required: "Phone number is required",
          pattern: {
            // This is a simple pattern for a 10-digit phone number, adjust as needed
            value: /^\d{10}$/,
            message: "Invalid phone number, must be 10 digits"
          }
        })}
        onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
      />
      {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}

      {/* dateOfBirth */}
      <p className="text-lg mt-6 font-semibold">Date of Birth</p>
      <Controller
        name="dateOfBirth"
        control={control}
        rules={{ required: "Date of Birth is required" }}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date: Date) => field.onChange(date)}
            selected={field.value}
            dateFormat="MM/dd/yyyy"
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
          />
        )}
      />
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth.message}</p>}<br/>


            {/* profilePicture */}
    <p className="text-lg mt-6 font-semibold">Profile Picture / Logo</p>
    <Controller
        name="profilePicture"
        control={control}
        rules={{ required: "Profile picture is required" }}
        render={({ field }) => (
          <input
            type="file"
            onChange={(e) => field.onChange(e.target.files)} // Updating the form state with the file(s)
            accept="image/*" // Restrict file input to images
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
          />
        )}
      />
      {errors.profilePicture && <p className="error">{errors.profilePicture.message}</p>}


      {/* Address */}
<p className="text-lg mt-6 font-semibold">Address</p>
<Controller
    name="address"
    control={control}
    rules={{ required: "Address is required" }}
    render={({ field }) => (
      <input
        {...field}
        type="text"
        placeholder="Address"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>
{errors.address && <p className="error">{errors.address.message}</p>}

{/* Biography */}
<p className="text-lg mt-6 font-semibold">Biography</p>
<Controller
    name="biography"
    control={control}
    render={({ field }) => (
      <textarea
        {...field}
        placeholder="Biography"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{/* Gender */}
<p className="text-lg mt-6 font-semibold">Gender</p>
<Controller
    name="gender"
    control={control}
    rules={{ required: "Gender is required" }}
    render={({ field }) => (
      <select
        {...field}
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    )}
/>
{errors.gender && <p className="error">{errors.gender.message}</p>}

{/* Nationality */}
<p className="text-lg mt-6 font-semibold">Nationality</p>
<Controller
    name="nationality"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="text"
        placeholder="Nationality"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{/* Type of Business */}
<p className="text-lg mt-6 font-semibold">Type of Business</p>
<Controller
    name="typeOfBusiness"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="text"
        placeholder="Type of Business"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{/* Registration Number */}
<p className="text-lg mt-6 font-semibold">Registration Number</p>
<Controller
    name="registrationNumber"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="text"
        placeholder="Registration Number"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{/* Website URL */}
<p className="text-lg mt-6 font-semibold">Website URL</p>
<Controller
    name="websiteUrl"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="url"
        placeholder="Website URL"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{/* Operating Hours */}
<p className="text-lg mt-6 font-semibold">Operating Hours</p>
<Controller
    name="operatingHours"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="text"
        placeholder="Operating Hours"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>



      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition ease-in-out duration-150">Submit</button>
        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit((name) ? name : '',auth,db);
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>

            
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              href="/Packages"
              className="flex justify-center items-center"
            >
              <RxLapTimer className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Get or Check Hours Consuption
            </Link>
          </button>
        </div>
      </section>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        
      </div>
    </>
  );
}