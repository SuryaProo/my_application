import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { ClassNames } from "@emotion/react";
import { colors } from "@mui/material";

function Banner() {
  return (
    <>
      <div className="bg-white flex row-span-1 ml-2 mr-2 mu-2">
        <div className="w-3/4 bg-white ml-3">
          <h1 className="text-2xl ml-1 mt-1">ALL SKILLS ,ONE CENTRAL PLACE.</h1>
          <div>
            <p className="ml-1 mt-3">
              Welcome to Zeblearn India, your trusted partner in professional
              development and career advancement in the dynamic world of
              technology. At Zeblearn India, we are committed to empowering
              individuals and organizations with the knowledge and skills needed
              to excel in today's competitive landscape.
            </p>
          </div>
          <div className="mt-2 flex row-span-1">
            <span ClassNames="">
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span ClassNames="bg-slate-400">
              <StarIcon />
            </span>
            <span ClassNames="bg-slate-400">
              <StarIcon />
            </span>
            <span ClassNames="bg-slate-400">
              <StarIcon />
            </span>
            <span className="ml-1">
              <p>4.9 out of 5 based on 35644 votes</p>
            </span>
          </div>
          <hr />
          <div className=" flex row-span-1 p-2 mt-7 justify-evenly ">
            <div>
              <button className="hover:bg-red-400 bg-slate-400 p-2 mr-1 rounded">
                PLACEMENT REPORT
              </button>
            </div>
            <div>
              <button className="hover:bg-red-400 bg-slate-400 p-2 mr-1 rounded">
                PLACEMENT REPORT
              </button>
            </div>
            <div>
              <button className="hover:bg-red-400 bg-slate-400 p-2 mr-1 rounded">
                PLACEMENT REPORT
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-red-100 ml-1">
          <h1 className=" ml-2 text-xl">Check Your Course Fee</h1>
          <div>
            <form>
              <div className="bg-slate-300  ">
                <div className=" p-2">
                  <label>Name</label>
                  <br />
                  <input placeholder="write your Name"></input>
                </div>
                <div className="p-2">
                  <label>Email</label>
                  <br />
                  <input placeholder=" write your Email"></input>
                </div>
                <div className="p-2">
                  <label>Phone No.</label>
                  <br />
                  <input type="number" placeholder="+91"></input>
                </div>
                <div className="p-2 ">
                  <button className="bg-indigo-400 p-1 rounded-md w-full ">
                    Calculate now
                  </button>
                </div>
              </div>
            </form>

            <div className="p-2 ">
              <button className="bg-green-400 p-1 rounded-md w-full ">
                GET BROUCHURE ON WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
