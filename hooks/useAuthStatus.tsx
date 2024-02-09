import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus(): { loggedIn: boolean; checkingStatus: boolean } {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
      setCheckingStatus(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { loggedIn, checkingStatus };
}
