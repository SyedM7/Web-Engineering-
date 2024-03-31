import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col border h-screen border-black ">
      <div className="bg-orange-200 m-1 border border-black flex flex-grow justify-center  items-center">A</div>
      
      <div className="flex flex-grow max-sm:flex-col m-1 max-sm:h-4/5">
        <div className="flex flex-col flex-grow w-2/3 max-sm:w-full max-sm:mb-2 mr-2 ">
          <div className="grid grid-cols-3 gap-2 flex-grow mb-2">
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">B</div>
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">C</div>
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">D</div>
          </div>
          <div className="grid grid-cols-3 gap-2 flex-grow">
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">E</div>
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">F</div>
            <div className="bg-orange-200 border border-black flex flex-grow justify-center items-center">G</div>
          </div>
        </div>
        <div className="bg-orange-200 border  border-black flex justify-center max-sm:w-full max-sm:h-1/2 items-center w-1/3  flex-grow ">H</div>
      </div>

    </div>
  );
};

export default Home;
