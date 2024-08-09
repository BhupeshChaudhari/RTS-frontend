import React from "react";
import profile from "../assets/profile.png";
import { RiDownloadLine } from "react-icons/ri";

const ReportSection = () => {
  return (
    <section className="bg-[#49243E] mb-0 text-white p-4">
      <div className="flex justify-between sm:px-6 items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
            src={profile}
            alt="Profile"
          />
          <span className="flex">
            <h2 className="text-#8C3061 mt-1" style={{ color: "#F4D9D0" }}>
              Report for
            </h2>
            <h2 className="ml-2 text-xl font-semibold">Gwen Anderson</h2>
          </span>
        </div>
        <button className="flex items-center bg-[#704264] text-white px-4 py-1.5 rounded-lg font-medium">
          <RiDownloadLine className="mr-2 w-4 h-4" />
          Download
        </button>
      </div>
    </section>
  );
};

export default ReportSection;
