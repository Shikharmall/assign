import React from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";

export default function Interest() {
  return (
    <>
      <Progress width={"20"} />
      <div className="flex justify-center m-2">
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <center>
            <h1 className="text-3xl font-bold text-[#1e1e1e] my-4 flex flex-col justify-center items-center whitespace-wrap sm:whitespace-nowrap">
              Which are you most interested in?
            </h1>
          </center>
          <div className="flex justify-center">
            <center>
              <p className="text-sm mb-5 text-gray-500 font-semibold whitespace-wrap sm:whitespace-nowrap">
                Choose just one.This will help us get you started(but won't
                limit your experience).
              </p>
            </center>
          </div>
          <div className="flex justify-center flex-col">
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://em-content.zobj.net/source/lg/57/stock-chart_1f5e0.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal">
                Learning specific skills to advance my career
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://w7.pngwing.com/pngs/124/333/png-transparent-earth-black-and-white-cartoon-earth-s-blue-globe-world.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal">
                Exploring new topics I'm interested in
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://pbs.twimg.com/profile_images/1384201082604199945/SmCh0n89_400x400.jpg"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal">
                Refreshing my math foundations
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/759/506/original/target-icon-cartoon-free-vector.jpg"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal">
                Exercising my brain to stay sharp
              </h1>
            </div>
            <div className="border border-opacity-25 border-gray-600 p-5 py-3 my-2 rounded-lg flex items-center cursor-pointer">
              <img
                src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTY0LWVsZW1lbnQtMjYtcC5wbmc.png"
                alt="user-logo"
                className="w-8"
              />
              <h1 className="ml-5 font-normal">Something else</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={`/rightplace`}>
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
