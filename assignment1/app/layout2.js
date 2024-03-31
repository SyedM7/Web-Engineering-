import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col p-5 h-screen">
      <div className="flex">
        <div className="bg-orange-200 border border-black p-6 ">Logo</div>
        <div className="ml-3 flex flex-col flex-grow">
          <div className="bg-orange-200 border border-black text-center">Navigation</div>
          <div className="bg-orange-200 border border-black text-center mt-3 p-2">Search</div>
        </div>
      </div>
      <div className="bg-orange-200 border border-black p-5 text-center mt-3">
        Header/Banner
      </div>
      <div className="bg-orange-200 border border-black p-8 text-center mt-3">
        Introduction Area
      </div>
      <div className="mt-3 flex flex-grow">
        <div className="bg-orange-200 border border-black w-1/3 flex justify-center items-center">
          Box1
        </div>
        <div className="bg-orange-200 border border-black w-1/3 ml-3 flex justify-center items-center">
          Box2
        </div>
        <div className="bg-orange-200 border border-black w-1/3 ml-3 flex justify-center items-center">
          Box3
        </div>
      </div>
    </div>
  );
};

export default Home;
