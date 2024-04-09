import React from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";

export default function Describe() {
  return (
    <>
      <Progress width={"10"} />
      <div className="flex justify-center m-2">
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <center>
            <h1 className="text-3xl font-bold text-[#1e1e1e] my-4 flex flex-col justify-center items-center whitespace-wrap sm:whitespace-nowrap">
              Which describes you best?
            </h1>
          </center>

          <div className="flex justify-center">
            <center>
              <p className="text-sm text-gray-500 font-semibold whitespace-wrap sm:whitespace-nowrap">
                {" "}
                {/* text-[#8f8f8f] */}
                This will help us personalize your experience.
              </p>
            </center>
          </div>
          <br />
          <div className="flex justify-center flex-col">
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DStudent_830823629321515.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Student</span> or soon to be
                enrolled
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DProfessional_3183921264115743.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Professional</span> pursuing a
                career
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DParent_6858243195481246.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Parent</span> of a school-age child
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DTeacher_3477887921150866.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Lifelong Learner</span>
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FExport_Retired%20(1)_42157333845339884.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Teacher</span>
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DOther_39497974702587735.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal text-gray-600">
                <span className="text-black">Other</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={`/interest`}>
              <button className="text-white bg-black py-2.5 px-12 rounded-lg font-semibold my-3">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
