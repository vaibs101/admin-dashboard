"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import Link from "@mui/material/Link";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosStar, IoMdHeartEmpty } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from "react-collapse";

const ProductSize = () => {
  return (
    <div className="py-5 flex flex-col gap-2">
      <span className="text-[15px] font-[500] text-gray-500 dark:text-gray-300">
        Select Size
      </span>
      <div className="flex items-center gap-3">
        <span
          className="flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600"
        >
          6
        </span>
        <span
          className="flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600"
        >
          7
        </span>

        <span
          className="flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600"
        >
          8
        </span>
        <span
          className="flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600"
        >
          9
        </span>
        <span
          className="flex items-center justify-center border 
            border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)] w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600"
        >
          10
        </span>
      </div>
    </div>
  );
};

const DeliveryOptions = () => {
  const [isOpenDelivery, setIsOpenDelivery] = useState(true);
  return (
    <div className="box">
      <div
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => setIsOpenDelivery(!isOpenDelivery)}
      >
        <h4 className="text-[20px] text-gray-800 dark:text-gray-300 font-[500]">
          Delivery Options
        </h4>
        <FaAngleDown
          size={22}
          className={`transition-all ${isOpenDelivery === true ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div className="my-2 w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>
      <Collapse className="" isOpened={isOpenDelivery}>
        <div className="content pr-4 pt-4">
          <form className={`searchBox w-full relative`}>
            <input
              type="text"
              placeholder={"Enter Pincode"}
              className="w-full h-[40px] rounded-md outline-none border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.1)] bg-transparent px-3 text-[14px] 
                        focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] hover:border-[rgba(0,0,0,0.4)] dark:hover:border-[rgba(255,255,255,0.4)] dark:bg-themeDark bg-white"
            />
            <button
              type="button"
              className="border-0 top-2 right-4 bg-transparent text-[14px] font-[500] absolute z-[50] cursor-pointer dark:text-gray-300"
            >
              Check
            </button>
          </form>
          <p className="text-[13px] text-gray-600 dark:text-gray-300 mt-2">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-300 my-2">
            100% Original Products
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-300 my-2">
            Pay on delivery might be available
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-300 my-2">
            Easy 14 days returns and exchanges
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-300 my-2">
            Try & Buy might be available for some products
          </p>
        </div>
      </Collapse>

      <hr />
    </div>
  );
};

const SimilarProducts = () => {
  return (
    <div className="similarProduct w-full flex flex-col gap-3 mt-4">
      <h2 className="text-[22px] font-[500] text-gray-700 dark:text-gray-300">
        Similar Products
      </h2>
      <div className="grid grid-cols-5 gap-7">
        <div className="">
          <ProductItems
            img={""}
            title={"Casio Watch"}
            category={"Casio Classic Watch"}
            price="$250.00"
            oldPrice="$350.00"
          />
          <ProductItems
            img={""}
            title={"Beats Headphone"}
            category={"High Quality Wireless Headphone"}
            price="$250.00"
            oldPrice="$350.00"
          />
          <ProductItems
            img={""}
            title={"Marc Jacobs Decadent"}
            category={"Classic Marc Jacob’s Fragrance"}
            price="$250.00"
            oldPrice="$350.00"
          />
          <ProductItems
            img={""}
            title={"Black Shoes"}
            category={"Classic Black Heels For Women"}
            price="$250.00"
            oldPrice="$350.00"
          />
        </div>
      </div>
    </div>
  );
};
const ProductItems = (props) => {
  return (
    <div className="productItem bg-white dark:bg-[#1f2937] shadow-md overflow-hidden rounded-md">
      <div className="img overflow-hidden rounded-md group">
        <Image
          src={props.img}
          width={273}
          height={318}
          className="group-hover:scale-105 transition-all"
          alt="product image"
        />
      </div>
      <div className="info p-3">
        <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-300">
          {props.title?.substr(0, 30) + "..."}
        </h4>
        <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-400">
          {props.category}
        </h4>

        <div className="flex items-center gap-2">
          <span className="text-[15px] text-gray-800 font-bold dark:text-gray-300">
            {props.price}
          </span>
          <span className="text-[15px] text-gray-800 font-[500] line-through dark:text-gray-300">
            {props.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
const RatingAndReviewBox = () => {
  const [isRatingAndReviewBox, setIsRatingAndReviewBox] = useState(false);
  return (
    <div className="box">
      <div
        className="flex items-center justify-between cursor-pointer py-3"
        onClick={() => setIsRatingAndReviewBox(!isRatingAndReviewBox)}
      >
        <h4 className="text-[18px] text-gray-800 dark:text-gray-300 font-[500]">
          Rating & Reviews
        </h4>
        <FaAngleDown
          size={22}
          className={`transition-all ${isRatingAndReviewBox === true ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <Collapse className="" isOpened={isRatingAndReviewBox}>
        <div className="content pr-4">
          <h3 className="text-[40px] text-gray-800 font-bold dark:text-gray-300">
            4.1
          </h3>
          <p className="text-[15px] text-gray-700 dark:text-gray-300">
            12 verified buyers
          </p>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex items-center gap-3">
              <span className="font-[500] dark:text-gray-300">5</span>
              <span>
                <IoIosStar size={20} className="text-yellow-400" />
              </span>
              <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-600 rounded-full w-[20%] h-full"></span>
              </div>
              <span className="font-[500] dark:text-gray-300">3</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex items-center gap-3">
              <span className="font-[500]">4</span>
              <span>
                <IoIosStar size={20} className="text-yellow-400" />
              </span>
              <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-600 rounded-full w-[40%] h-full"></span>
              </div>
              <span className="font-[500]">8</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex items-center gap-3">
              <span className="font-[500]">3</span>
              <span>
                <IoIosStar size={20} className="text-yellow-400" />
              </span>
              <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-600 rounded-full w-[60%] h-full"></span>
              </div>
              <span className="font-[500]">4</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex items-center gap-3">
              <span className="font-[500]">2</span>
              <span>
                <IoIosStar size={20} className="text-yellow-400" />
              </span>
              <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-600 rounded-full w-[30%] h-full"></span>
              </div>
              <span className="font-[500]">3</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex items-center gap-3">
              <span className="font-[500]">1</span>
              <span>
                <IoIosStar size={20} className="text-yellow-400" />
              </span>
              <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-600 rounded-full w-[10%] h-full"></span>
              </div>
              <span className="font-[500]">2</span>
            </div>
          </div>
        </div>
      </Collapse>

      <hr />
    </div>
  );
};

const ProductDetails = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[25px] font-bold">Shop</h1>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            E-Commerce
          </Link>
          <Link underline="hover" color="inherit" href="/products">
            Shop
          </Link>
          <Typography sx={{ color: "text.primary" }}>F1234567</Typography>
        </Breadcrumbs>
      </div>

      <div className="grid grid-cols-2 gap-3 py-4">
        <div className="left-sec">
          <div className="grid grid-cols-2 gap-3 sticky top-[100px]">
            <div className="img overflow-hidden rounded-md group">
              <Image
                src={"/product2.webp"}
                width={273}
                height={318}
                className="group-hover:scale-105 transition-all"
                alt="product image"
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <Image
                src={"/product3.webp"}
                width={273}
                height={318}
                className="group-hover:scale-105 transition-all"
                alt="product image"
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <Image
                src={"/product4.webp"}
                width={273}
                height={318}
                className="group-hover:scale-105 transition-all"
                alt="product image"
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <Image
                src={"/product2.webp"}
                width={273}
                height={318}
                className="group-hover:scale-105 transition-all"
                alt="product image"
              />
            </div>
          </div>
        </div>

        <div className="right-sec">
          <h2 className="text-[25px] font-bold text-gray-800 dark:text-gray-300">
            Casual Shoes
          </h2>
          <h3 className="text-[18px]  text-gray-500 dark:text-gray-400">
            Classic Casual Shoes
          </h3>

          <div className="my-4 w-full h-[1px] bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-[22px] text-gray-800 font-bold dark:text-gray-300">
              $245.00
            </span>
            <span className="text-[16px] text-gray-800 font-[500] line-through dark:text-gray-300">
              $345.00
            </span>
            <span className="text-[14px] text-red-600 font-[500]">
              {"30% OFF"}
            </span>
          </div>
          <span className="text-[16px] text-green-600 font-[500]">
            Inclusive of all taxes
          </span>

          <ProductSize />
          <div className="flex flex-col gap-3 my-2">
            <Button className="btn-dark btn-lg !w-full !py-3 !px-4 !capitalize items-center gap-2">
              <FiShoppingCart size={25} />
              Add to Cart
            </Button>
            <Button className="btn-dark btn-lg !w-full !bg-white !py-3 !px-4 !capitalize items-center gap-2">
              <IoMdHeartEmpty size={25} />
              Wishlist
            </Button>
          </div>
          <br />
          <div className="my-4 w-full bg-gray-300 dark:bg-gray-800">
            <DeliveryOptions />
            <RatingAndReviewBox />
         
          </div>
             
          <div className='my-3'>
          <form className="flex flex-col gap-3">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <textarea
              className="w-full h-[45px] border border-[rgba(0,0,0,0.2)] outline-none
         focus:border-[rgba(0,0,0,0.7)] hover:border-[rgba(0,0,0,0.7)] py-3 rounded-md px-3 bg-gray-100 dark:bg-gray-800"
              placeholder="Review..."
            />
            <div className="flex">
              <Button className="btn-dark btn-lg !bg-white !py-2 !px-4 !capitalize items-center gap-2">
                Submit
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </>
  );
};

export default ProductDetails;
