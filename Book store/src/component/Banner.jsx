import React from "react";
import book from "../assets/book.jpg";

const Banner = () => {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 p-4 flex flex-col md:flex-row mt-6 md:mt-12 gap-12 ">
          <div className="order-2 md:order-1 w-full md:w-1/2 space-y-5">
            <h1 className="text-3xl">
              Hello, Wellcome to here to Learn something{" "}
              <span className="text-pink-500">New Everyday</span>
            </h1>
            <div>
              <label className="input input-bordered flex items-center gap-2 mt-10  dark:bg-slate-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow " placeholder="Email" />
              </label>
            </div>
            <button className="btn btn-secondary">Secondary</button>
          </div>
          <div className="order-1 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={book} alt="books" className="w-98 rounded-md" />
          </div>
        </div>
    </>
  );
};

export default Banner;
