"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    //if (!userIsAuthenticated) {
      router.push('/Signin');
    //}
  }, [router]);
  return (
    <section>
      
    </section>
  );
}
