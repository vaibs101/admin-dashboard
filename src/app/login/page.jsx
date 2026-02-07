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
const Login = () => {
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
            <h1 className="text-[30px] font-bold mt-2 text-gray-800 dark:text-gray-300">
              Welcome back!
            </h1>
            <p className="text-[16px] font-[600] mt-2 text-gray-800 dark:text-gray-300">
              Please enter your credentials to sign in!
            </p>
            <form className="mt-3">
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

              <div className="col_ mb-2">
                <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordShow === true ? "text" : "password"}
                    className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none
         focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                    placeholder="password"
                  />
                  <Button
                    className="!w-[33px] !h-[33px] !min-w[33px] !rounded-full !absolute !top-2 !right-2 z-50"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  >
                    {isPasswordShow === true ? (
                      <FiEye size={30} className="text-gray-800" />
                    ) : (
                      <GoEyeClosed size={30} className="text-gray-800" />
                    )}
                  </Button>
                </div>
              </div>

              <Link
                href="/forgot-password"
                className="text-gray-800 dark:text-gray-300 font-bold text-[15px] underline hover:text-blue-600"
              >
                Forgot Password
              </Link>

              <div className="my-2">
                <Button
                  className="w-full !capitalize btn-dark btn-lg"
                  size="large"
                >
                  Sign In
                </Button>
              </div>
              <div className="my-2 flex items-center justify-between gap-2">
                <span className="bg-gray-300 dark:bg-gray-500 h-[1px] block w-28"></span>
                <span className="text-gray-700 text-[16px] dark:text-gray-400">
                  or continue with
                </span>
                <span className="bg-gray-300 dark:bg-gray-500 h-[1px] block w-28"></span>
              </div>
              <div className="my-2 grid grid-cols-2 items-center justify-between gap-2">
                <Button className="gap-2 !capitalize !text-gray-800 dark:!bg-gray-300 loginActions">
                  <FcGoogle size={30} />
                  Google
                </Button>
                <Button className="gap-2 !capitalize !text-gray-800 dark:!bg-gray-300">
                  <FaGithub size={30} />
                  Github
                </Button>
              </div>

              <p className="text-center text-[15px] text-gray-700 dark:text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  href={"/signup"}
                  className="text-gray-800 dark:text-gray-400 px-3 font-bold text-[15px] underline hover:text-blue-600"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          <div className="right w-[50%] h-[85vh] overflow-hidden rounded-[40px]">
            <img
              src={"/sign-up.webp"}
              alt="dashboard image"
              className="w-full"
              
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
