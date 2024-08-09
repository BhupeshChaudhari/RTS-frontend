import React from "react";
import { FiTag } from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";
import profile from "../assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="w-full min-h-screen p-8 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-md">
          <div className="p-6 flex flex-col justify-center items-center text-center">
            <img
              className="mb-3 w-24 h-24 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
              src={profile}
            />
            <h2 className="text-xl font-bold">Gwen Anderson</h2>
            <p className="text-gray-500 text-sm">andersongwen@gmail.com</p>
            <div className="flex justify-center items-center mt-2">
              <GiTrophyCup className="bg-red-100 p-2 mt-1 text-red-600 rounded-md text-4xl" />
              <div className=" text-[#FF5F00] px-3 py-1 ml-2 rounded-full text-xl font-semibold">
                3<sup>rd</sup>
              </div>
            </div>
          </div>
          <div className="bg-red-50 text-[#FF5F00] flex justify-between items-center py-2 rounded-bl-xl rounded-br-xl">
            <p className="text-sm px-3 font-semibold">Today's time spent</p>
            <p className="text-sm px-3 font-semibold">4h 25m</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Daily progress</h3>
          <div className="flex mt-1 items-center justify-between mb-2">
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <span className="text-gray-600 text-sm ml-2">10 pts</span>
          </div>
          <div className="flex mt-4 items-center mt-2">
            <FiTag className="text-4xl mr-2 bg-[#FDDE55] text-white border border-t-2 border-gray-200 rounded-md p-1" />
            <p className="text-gray-700 font-semibold">
              Prize: 25% discount coupon <br />
              <span className="text-sm font-normal text-gray-500">
                for all software courses
              </span>
            </p>
          </div>
          <p></p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Learning overview</h3>
          <div className="relative">
            <svg viewBox="0 0 100 50" className="w-full h-25">
              <polyline
                fill="none"
                stroke="#FF4500"
                strokeWidth="0.7"
                points="0,50 20,40,40,10"
              />
              <polyline
                fill="none"
                stroke="#DDDDDD"
                strokeWidth="0.7"
                points="40,10,60,20 80,40 100,30"
              />
            </svg>
            <div className="absolute top-1/3 left-2/4 transform -translate-x-1/2">
              <p className="bg-black text-white text-xs px-1 py-1 rounded-md">
                29 questions
              </p>
            </div>
          </div>
          <div className="flex justify-between text-gray-500 text-sm mt-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span className="text-red-600 font-bold">Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
