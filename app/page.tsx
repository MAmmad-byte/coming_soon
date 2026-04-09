"use client";
import Image from "next/image";
import { waitlistFormValues, waitlistSchema } from "./api/waitlist/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import AppLoader from "@/app/.components/loader";
import { useState } from "react";
import wingCycle from "@/public/wing_cycle.png";
import bg from "@/public/coming_soon_bg.jpg";
export default function Home() {
  const { register, handleSubmit } = useForm<waitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });
  const [Submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleEmailSubmit: SubmitHandler<waitlistFormValues> = async (
    formData,
  ) => {
    setLoading(true);
    const postData = await axios.post("/api/waitlist", {
      email: formData.email,
    });
    if (postData.status == 201) {
      setSubmitted(true);
    }
  };
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Image
        alt="Background"
        src={bg} // Use the high-res original
        placeholder="blur" // Optional: adds a blurred effect while loading
        blurDataURL="/coming_soon_bg.jpg"
        quality={70}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        priority // <--- Crucial
        fetchPriority="high" // <--- Add this for LCP
      />{" "}
      <main className="animate-ghibli flex flex-1 w-full max-w-3xl flex-col items-center justify-between  px-16   sm:items-start">
        <div className="w-full flex items-center flex-col justify-center">
          <Image
            src={wingCycle}
            width={200}
            height={200}
            className="mt-20"
            alt="wing-cycle"
            // placeholder="blur"
            style={{
              width: "250px",
              height: "auto",
            }}
          />
          <div className="text-center">
            {!Submitted ? (
              <>
                <h2 className=" text-[#3D4034] mt-5 md:text-5xl text-3xl font-semibold">
                  The Future of Task Management is Coming
                </h2>
                <p className="font-normal text-[#2a2c24] mt-2 font-serif tracking-wider text-xl">
                  Get early access and a 50% discount at launch!🚀
                </p>
                <form onSubmit={handleSubmit(handleEmailSubmit)} action="">
                  <div className="bg-[#ece1be] mt-5 md:rounded-full rounded-4xl border border-[#2a2c2434] p-2 flex flex-col items-stretch md:flex-row mt-2">
                    <input
                      {...register("email")}
                      className="text-lg bg-[#e7e5df] text-[#2a2c24] outline-0 flex-1 border border-[#2a2c2434] rounded-full p-2 px-3"
                      placeholder="Enter your email..."
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="bg-orange-500 p-2 px-4 rounded-full md:ml-2 md:mt-0 mt-2 ml-0 cursor-pointer hover:bg-orange-600"
                    >
                      {loading ? <AppLoader /> : "JOIN THE WAITLIST"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-5xl font-sniglet text-[#3D4034] mb-2">
                  Thank You!
                </h2>
                <p className="text-xl text-[#3D4034]">
                  Your spot on our journey has been reserved. ✨
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
