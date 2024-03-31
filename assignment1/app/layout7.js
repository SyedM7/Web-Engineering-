import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col m-2 border h-screen border-black p-2">
      <div className=" m-2 bg-orange-200 border border-black p-5 flex justify-center items-center text-center">A</div>
      <div className="flex-grow flex max-sm:flex-grow max-sm:flex-col ">
        <div className="flex flex-col flex-grow w-2/3 p-1 text-center max-sm:w-full">
          <div className=" flex-grow  m-1 border h-2/3 flex justify-center items-center bg-orange-200 border-black">B</div>
          <div className="flex  h-1/3">
            <div className="flex-grow m-1 flex justify-center items-center bg-orange-200 border border-black">C</div>
            <div className="flex-grow m-1 flex justify-center items-center bg-orange-200 border border-black">D</div>
            <div className="flex-grow m-1 flex justify-center items-center bg-orange-200 border border-black">E</div>
          </div>
        </div>
        <div className="w-1/3 flex m-1 flex-grow border justify-center items-center max-sm:w-full bg-orange-200 border-black">F</div>
      </div>
    </div>
  );
};

export default Home;