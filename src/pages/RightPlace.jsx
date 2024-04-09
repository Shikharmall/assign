import React from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";
import Img from "../images/image1.png";

export default function RightPlace() {
  return (
    <>
      <Progress width={"35"} />
      <div className="flex justify-center">
        <div>
          <div className="flex jutify-center items-center">
            <div className="w-1/3 flex justify-center items-center">
              <img src={Img} alt="logo" className="w-[300px]" />
            </div>
            <div className="w-2/3 flex justify-center items-center">
              <div className="w-[500px]">
                <h1 className="text-3xl font-bold text-[#1e1e1e] my-4">
                  You're in the right place
                </h1>
                <div className="flex justify-center">
                  <p className="text-sm text-[#8f8f8f] font-semibold">
                    Brilliant gets you hands-on to help improve your
                    professional skills and knowledge. You'll interact with
                    concepts and solve fun problems in math, science, and
                    computer science.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to={`/mathslevel`}>
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
