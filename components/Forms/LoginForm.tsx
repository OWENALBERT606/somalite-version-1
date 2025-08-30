"use client";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { LoginProps } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import TextInput from "../FormInputs/TextInput";
import PasswordInput from "../FormInputs/PasswordInput";
import SubmitButton from "../FormInputs/SubmitButton";
import Logo from "../global/Logo";
import CustomCarousel from "../frontend/custom-carousel";
import Image from "next/image";
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginProps>();
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl") || "/dashboard";
  const [passErr, setPassErr] = useState("");
  const router = useRouter();


  async function onSubmit(data: LoginProps) {
  try {
    setLoading(true);
    setPassErr("");
    const loginData = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (loginData?.error) {
      setLoading(false);
      toast.error("Sign-in error: Check your credentials");
      setPassErr("Wrong Credentials, Check again");
    } else {
      reset();
      toast.success("Login Successful");

      // ✅ Get fresh session with user + roles
      const res = await fetch("/api/auth/session");
      const session = await res.json();

      const role = session?.user?.roles?.[0]?.roleName;
      if (role === "schooladmin") {
        const slug = session?.user?.school?.slug; // make sure you add `school` to JWT/session callback
        if (slug) {
          router.push(`/school/${slug}`);
        } else {
          router.push("/dashboard"); // fallback
        }
      } else if (role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/"); // unauthorized or other roles
      }

      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    console.error("Network Error:", error);
    toast.error("It seems something is wrong with your Network");
  }
}





  // async function onSubmit(data: LoginProps) {
  //   try {
  //     setLoading(true);
  //     setPassErr("");
  //     console.log("Attempting to sign in with credentials:", data);
  //     const loginData = await signIn("credentials", {
  //       ...data,
  //       redirect: false,
  //     });
  //     console.log("SignIn response:", loginData);
  //     if (loginData?.error) {
  //       setLoading(false);
  //       toast.error("Sign-in error: Check your credentials");
  //       setPassErr("Wrong Credentials, Check again");
  //       // setShowNotification(true);
  //     } else {

  //       reset();
  //       setLoading(false);
  //       toast.success("Login Successful");
  //       setPassErr("");
  //       router.push("/dashboard");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Network Error:", error);
  //     toast.error("Its seems something is wrong with your Network");
  //   }
  // }
  return (
    <div className="w-full lg:grid mx-auto h-screen lg:min-h-[600px] lg:grid-cols-1 relative ">
      <div className="flex shadow-md items-center justify-center py-12">
        <div className="mx-auto grid shadow-lg w-[450px] border-r-2 rounded-lg p-6 gap-6 mt-10 md:mt-0">
          <div className="grid gap-2  mt-10 md:mt-0">
            <div className="flex justify-center">
            <Image src="/logos/ChatGPT Image Aug 26, 2025, 04_24_48 PM.png" width={100} height={100} alt="soma lite"/>
          </div>
            <h1 className="text-2xl mx-auto font-bold">Welcome back</h1>
            <p className="text-purple-500  mx-auto text-xl font-bold">
              Login to your account
            </p>
          </div>
          <div className="">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                register={register}
                errors={errors}
                label="Email Address"
                name="email"
                icon={Mail}
                placeholder="email"
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
                icon={Lock}
                placeholder="password"
                forgotPasswordLink="/forgot-password"
              />
              {passErr && <p className="text-red-500 text-xs">{passErr}</p>}
              <div>
                <SubmitButton
                  title="Sign In"
                  loadingTitle="Loading Please wait.."
                  loading={loading}
                  className="w-full"
                  loaderIcon={Loader2}
                  showIcon={false}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
