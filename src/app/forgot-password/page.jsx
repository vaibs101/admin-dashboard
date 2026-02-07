"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { MyContext } from "@/Context/ThemeProvider";
const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const context=useContext(MyContext);
  
  return (
    <section className="login fixed top-0 left-0 z-[100] bg-white dark:bg-themeDark w-full h-screen">
      <div className="container p-[60px]">
        <div className="flex items-center gap-5">
          <div className="left w-[50%] pl-64">
             {context.theme==='light'?
         <img src="/aegisLogo.webp" className="w-20" alt="logo" />
           :  <img src="/aegisLogo.webp" className="w-20" alt="logo" />
               
        }
        <h1 className="text-[30px] font-bold mt-4 text-gray-800 dark:text-gray-300">
              Forgot Password
            </h1>
            <p className="text-[16px] font-[600] mt-4 text-gray-800 dark:text-gray-300">
              Please enter your email to receive a verification code
            </p>
            <form className="mt-5">
              <div className="col_ mb-4">
                <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                  placeholder="Email"
                  autoFocus
                />
              </div>

              

              

              <div className="my-4">
                <Button
                  className="w-full !capitalize btn-dark btn-lg"
                  size="large"
                >
                  Submit
                </Button>
              </div>
              
              

              <p className="text-center text-[15px] text-gray-700 dark:text-gray-400">
                Back to{" "}
                <Link
                  href={"/login"}
                  className="text-gray-800 dark:text-gray-400 px-3 font-bold text-[15px] underline hover:text-blue-600"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>

          <div className="right w-[50%] h-[85vh] overflow-hidden rounded-[40px]">
            <Image
              src={"./signup.webp"}
              alt="dashboard image"
              className="w-full"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
