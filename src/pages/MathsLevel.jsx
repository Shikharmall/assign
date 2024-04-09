import React from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";

import Img1 from "../images/ques1.png";
import Img2 from "../images/ques2.png";
import Img3 from "../images/ques3.png";
import Img4 from "../images/ques4.png";

export default function MathsLevel() {
  return (
    <>
      <Progress width={`60`} />
      <div className="flex justify-center">
        <div>
          <center>
            <h1 className="text-3xl font-bold text-[#1e1e1e] my-4 flex flex-col justify-center items-center whitespace-wrap sm:whitespace-nowrap">
              What is your math comfort level?
            </h1>
          </center>
          <div className="flex justify-center">
            <center>
              <p className="text-sm text-[#8f8f8f] font-semibold whitespace-wrap sm:whitespace-nowrap">
                Choose the highest level you feel confident in you can always
                adjust later.
              </p>
            </center>
          </div>

          <div className="flex justify-center my-10 flex-wrap">
            <div className="border border-opacity-30 border-gray-500 p-10 m-3 flex flex-col rounded-md justify-center items-center max-w-[200px] max-h-[200px]">
              <img src={Img1} alt="ques-img" />
              <h1 className="text-sm font-semibold text-[#1e1e1e] my-1">
                Arithmetic
              </h1>
              <div className="flex justify-center">
                <p className="text-md text-[#8f8f8f] font-semibold">
                  Introductory
                </p>
              </div>
            </div>
            <div className="border border-opacity-30 border-gray-500 p-10 m-3 flex flex-col rounded-md justify-center items-center max-w-[200px] max-h-[200px]">
              <img src={Img2} alt="ques-img" />
              <h1 className="text-sm font-semibold text-[#1e1e1e] my-1">
                Basic Algebra
              </h1>
              <div className="flex justify-center">
                <p className="text-md text-[#8f8f8f] font-semibold">
                  Foundational
                </p>
              </div>
            </div>
            <div className="border border-opacity-30 border-gray-500 p-10 m-3 flex flex-col rounded-md justify-center items-center max-w-[200px] max-h-[200px]">
              <img src={Img3} alt="ques-img" />
              <h1 className="text-sm font-semibold text-[#1e1e1e] my-1">
                Intermediate Algebra
              </h1>
              <div className="flex justify-center">
                <p className="text-md text-[#8f8f8f] font-semibold">
                  Intermediate
                </p>
              </div>
            </div>
            <div className="border border-opacity-30 border-gray-500 p-10 m-3 flex flex-col rounded-md justify-center items-center max-w-[200px] max-h-[200px]">
              <img src={Img4} alt="ques-img" />
              <h1 className="text-sm font-semibold text-[#1e1e1e] my-1">
                Calculus
              </h1>
              <div className="flex justify-center">
                <p className="text-md text-[#8f8f8f] font-semibold">Advanced</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to={`/onway`}>
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
