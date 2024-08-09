import React from "react";
import { FaStar } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import "../App.css";

const GwensReport = () => {
  return (
    <div className="min-h-screen p-10 flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl">
        <div className="border-b pb-6 relative">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="inline-block border border-gray-200 bg-red-100 p-2 rounded-lg mr-4">
              <TbReport className="text-red-500 text-2xl " />
            </span>
            Gwen's Report
          </h2>
          <div className="border-b border-gray-200 mb-4"></div>
          <div className="gradient-grid-card mt-6">
            <div className="content text-center p-6">
              <div className="flex justify-center mb-4">
                <FaStar className="text-yellow-400 z-10 text-4xl mx-1 mt-7" />
                <FaStar className="text-yellow-400 z-10 text-7xl" />
                <FaStar className="text-yellow-400 z-10 text-4xl mx-1 mt-7" />
              </div>
              <h3 className="text-sm text-gray-500">Performance Summary:</h3>
              <p className="text-gray-900 font-semibold mb-3">
                Academic Year 2023-2024
              </p>
              <p className="text-sm text-gray-500">
                The academic year 2023-2024 witnessed significant achievements
                and progress in various aspects of our educational institution.
                This Performance Summary aims to provide a comprehensive
                overview of the key highlights and accomplishments.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border text-center">
            <h4 className="text-4xl font-bold text-red-500 mb-2">70%</h4>
            <p className="text-md text-gray-700 font-medium">
              Pre-Course Assessment
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Gwen demonstrated a solid foundation in digital marketing concepts
              at the beginning of the course.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border text-center">
            <h4 className="text-4xl font-bold text-red-500 mb-2">65%</h4>
            <p className="text-md text-gray-700 font-medium">
              Post-Course Assessment
            </p>
            <p className="text-xs text-gray-500 mt-2">
              A remarkable improvement in understanding and application of
              digital marketing principles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Timely Submission
            </h4>
            <div className="mt-3">
              <span className="bg-red-50 font-semibold text-red-500 text-sm py-1 px-3 rounded-full">
                Sustain your proficiency
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              All assignments and projects were submitted punctually, reflecting
              a commitment to meeting deadlines.
            </p>
            <div className="flex items-center justify-center mt-3">
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className="bg-red-500 h-2.5 rounded-full absolute top-0 left-0"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <span className="ml-2 text-gray-500">You</span>
            </div>
            <div className="flex items-center justify-center mt-3">
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className="bg-red-300 h-2.5 rounded-full absolute top-0 left-0"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="ml-2 text-gray-500">Other</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Quality of Work
            </h4>
            <div className="mt-3">
              <span className="bg-red-50 font-semibold text-red-500 text-sm py-1 px-3 rounded-full">
                Enhance your skills
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Gwen consistently produced high-quality work, incorporating
              theoretical knowledge into practical applications.
            </p>
            <div className="flex items-center justify-center mt-3">
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className="bg-red-500 h-2.5 rounded-full absolute top-0 left-0"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <span className="ml-2 text-gray-500">You</span>
            </div>
            <div className="flex items-center justify-center mt-3">
              <div className="w-3/4 bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className="bg-red-300 h-2.5 rounded-full absolute top-0 left-0"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="ml-2 text-gray-500">Other</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GwensReport;
