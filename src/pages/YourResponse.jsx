import React from "react";
import Img from "../images/image3.png";

export default function YourResponse() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col justify-center items-center m-2">
          <img src={Img} alt="img" className="w-[100px] h-[100px]" />
          <center>
            <h1 className="text-xl font-bold text-[#1e1e1e] my-4">
              Finding learning path recommendations for you based on your
              responses
            </h1>
          </center>
        </div>
      </div>
    </>
  );
}
