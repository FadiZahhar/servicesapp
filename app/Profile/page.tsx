"use client"
import { Auth, User, getAuth, updateProfile } from "firebase/auth";
import ReactDatePicker from 'react-datepicker';
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
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { RxLapTimer } from "react-icons/rx";
import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  name: string;
  profileType: string;
  phoneNumber:string;
  dateOfBirth:string;
  profilePicture:string;
  address:string;
  biography:string;
  gender:string;
  nationality:string;
  typeOfBusiness:string;
  registrationNumber:string;
  websiteUrl:string;
  operatingHours:string;
}

export default function Profile() {
  const { control, register, handleSubmit,setValue, formState: { errors } } = useForm<FormData>();
  
  const router = useRouter();
  const auth = getAuth();
  const [changeDetail, setChangeDetail] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const [imageUrl,setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    profileType: '',
    phoneNumber:'',
    dateOfBirth:'',
    profilePicture:'',
    address:'',
    biography:'',
    gender:'',
    nationality:'',
    typeOfBusiness:'',
    registrationNumber:'',
    websiteUrl:'',
    operatingHours:''
  });
 
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

  const  onSubmit = async (data:FormData) => {
    console.log(data)
    try {
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        throw new Error("No authenticated user.");
      }
  
      if (currentUser.displayName !== data.name) {
        // Update display name in Firebase Auth
        await updateProfile(currentUser, {
          displayName: data.name,
        });
  
        // Update name in Firestore
        const docRef = doc(db, "users", currentUser.uid);
        await updateDoc(docRef, {
          name: data.name,
          profileType: data.profileType,
          phoneNumber: data.phoneNumber,
          dateOfBirth:data.dateOfBirth,
          profilePicture:data.profilePicture,
          address:data.address,
          biography:data.biography,
          gender:data.gender,
          nationality:data.nationality,
          typeOfBusiness:data.typeOfBusiness,
          registrationNumber:data.registrationNumber,
          websiteUrl:data.websiteUrl,
          oporatingHours:data.operatingHours
        });
      }
  
      toast.success("Profile details updated");
    } catch (error) {
      console.error("Could not update the profile details", error);
      toast.error("Could not update the profile details");
    }
  }


  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any,
    setValue: Function // React Hook Form's setValue function
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      console.log('No file selected.');
      return;
    }
    const file = files[0];
    const storageRef = ref(storage, `profile/${file.name}`);
    
    try {
      const snapshot = await uploadBytes(storageRef, file);
      console.log('Uploaded a blob or file!', snapshot);
  
      // Retrieve the file's URL
      const fileUrl = await getDownloadURL(snapshot.ref);
      console.log('File URL:', fileUrl);
  
      // Update the form with the file's URL
      setValue(field.profilePicture, fileUrl); // Assuming you have a form field to store the image URL
      setImageUrl(fileUrl);
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Upload failed!');
    }
  };
  
  
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
    };
    //fetchUserListings();
  }, [auth.currentUser?.uid]);

  const onSubmit2 = (data: any) => {
    console.log(data);
  };


  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {changeDetail && <>

            {/* Name Input */}

            <input
             {...register("name", { required: true, minLength: 2 })}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />
            {errors.name && errors.name.type === "required" && (
            <span className="error">This is required</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="error">Max length exceeded</span>
            )}



            <p className="text-lg mt-6 font-semibold">Profile Type</p>
            <Controller
    name="profileType"
    control={control}
    rules={{ required: "Profile type is required" }}
    render={({ field }) => (
      <select
        {...field}
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      >
        <option value="">Select Profile Type</option>
        <option value="personal">Personal</option>
        <option value="business">Business</option>
      </select>
    )}
/>

        {errors.profileType && errors.profileType.message && (
  <p className="error">{errors.profileType.message as string}</p>
  )}
        {/* phone number */}
        <p className="text-lg mt-6 font-semibold">Phone Number</p>
      <input
        id="phoneNumber"
        {...register("phoneNumber", {
          required: "Phone number is required",
        })}
        onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
      />
      {errors.phoneNumber && errors.phoneNumber.message && (
  <p className="error">{errors.phoneNumber.message as string}</p>
)}

      {/* dateOfBirth */}
      <p className="text-lg mt-6 font-semibold">Date of Birth</p>
      <Controller
        name="dateOfBirth"
        control={control}
        rules={{ required: "Date of Birth is required" }}
        render={({ field }) => (
          <ReactDatePicker
            placeholderText="Select date"
            onChange={(date: Date) => field.onChange(date.toISOString())} // Convert Date to ISO string on change
            selected={field.value ? new Date(field.value) : null} // Convert string to Date for `selected`, handle potential null value
            dateFormat="yyyy-MM-dd" // Adjust the date format as needed
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
          />
        )}
      />
      {errors.dateOfBirth && errors.dateOfBirth.message && (<p className="error">{errors.dateOfBirth.message as string}</p>)}<br/>


            {/* profilePicture */}
    <p className="text-lg mt-6 font-semibold">Profile Picture / Logo</p>
    <Controller
        name="profilePicture"
        control={control}
        rules={{ required: "Profile picture is required" }}
        render={({ field }) => (
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e, field, setValue);
            }}
            accept="image/*"
            className="..."
          />
        )}
      />
      {/* Optionally display the image after upload */}
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: 100, height: 100 }} />}  
      
      {errors.profilePicture && errors.profilePicture.message && (<p className="error">{errors.profilePicture.message as string}</p>)}


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
{errors.address && errors.address.message && (<p className="error">{errors.address.message as string}</p>)}

{/* Biography */}
<p className="text-lg mt-6 font-semibold">Biography</p>
<Controller
    name="biography"
    control={control}
    rules={{ required: "Biography is required" }}
    render={({ field }) => (
      <textarea
        {...field}
        placeholder="Biography"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      ></textarea>
    )}
/>
{errors.biography && errors.biography.message && (<p className="error">{errors.biography.message as string}</p>)}
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
{errors.gender && errors.gender.message && (<p className="error">{errors.gender.message as string}</p>)}

{/* Nationality */}
<p className="text-lg mt-6 font-semibold">Nationality</p>
<Controller
    name="nationality"
    control={control}
    rules={{ required: "Nationality is required" }}
    render={({ field }) => (
      <input
        {...field}
        placeholder="Nationality"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>
{errors.nationality && errors.nationality.message && (<p className="error">{errors.nationality.message as string}</p>)}
{/* Type of Business */}
<p className="text-lg mt-6 font-semibold">Type of Business</p>
<Controller
    name="typeOfBusiness"
    control={control}
    rules={{ required: "Type of business" }}
    render={({ field }) => (
      <input
        {...field}
        placeholder="Type of Business"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>
{errors.typeOfBusiness && errors.typeOfBusiness.message && (<p className="error">{errors.typeOfBusiness.message as string}</p>)}
{/* Registration Number */}
<p className="text-lg mt-6 font-semibold">Registration Number</p>
<Controller
    name="registrationNumber"
    control={control}
    
    render={({ field }) => (
      <input
        {...field}
        placeholder="Registration Number"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>
{errors.registrationNumber && errors.registrationNumber.message && (<p className="error">{errors.registrationNumber.message as string}</p>)}
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
{errors.websiteUrl && errors.websiteUrl.message && (<p className="error">{errors.websiteUrl.message as string}</p>)}
{/* Operating Hours */}
<p className="text-lg mt-6 font-semibold">Operating Hours</p>
<Controller
    name="operatingHours"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        placeholder="Operating Hours"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
      />
    )}
/>

{errors.operatingHours && errors.operatingHours.message && (<p className="error">{errors.operatingHours.message as string}</p>)}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition ease-in-out duration-150">Submit</button>
   </>}
        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your profile?
                <span
                  onClick={() => {
                    changeDetail ? formRef.current && formRef.current.requestSubmit() : setChangeDetail((prevState) => !prevState);
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