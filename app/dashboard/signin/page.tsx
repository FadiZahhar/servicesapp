import SignInForm from "@/components/login/signinform"
import Head from "next/head"
export default function SignIn(){
    return(
        <>
        <Head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    />
    {/* ... other head elements ... */}
  </Head>
    <SignInForm /></>)
}