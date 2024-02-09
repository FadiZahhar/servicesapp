import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold"></h1>
      <div className="md:w[67%] lg:w-[50%] mb-12 md:mb-6">
        <img 
        src="https://unsplash.com/photos/keys-on-hand-jJnZg7vBfMs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash" 
        alt="key" 
        className="w-full rounded-2xl"

        />
      </div>
      <div>
        <form className="w-full md:w-[67%] lg:w-[40%]">
          <input className="w-full" type="text" />
        </form>
      </div>
    </section>
  );
}
