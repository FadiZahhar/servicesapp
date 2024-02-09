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

export default function Profile() {
  const router = useRouter();
  const auth = getAuth();
  const [changeDetail, setChangeDetail] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
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


  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
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