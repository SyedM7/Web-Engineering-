import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col p-5 h-screen">
      <div className="bg-orange-200 border border-black p-5 text-center">Navigation</div>
      <div className="mt-3 flex flex-grow">
        <div className="w-1/3 bg-orange-200 border border-black p-5 flex justify-center items-center mr-3">
          SideBar
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="h-1/3 mb-3 bg-orange-200 border border-black p-5 flex justify-center items-center">
            Header
          </div>
          <div className="h-2/3 bg-orange-200 border border-black p-5 flex justify-center items-center">
            Main Content
          </div>
        </div>
      </div>
      <div className=" bg-orange-200 border border-black p-5 text-center mt-3">Navigation</div>
    </div>
  );
};

export default Home;
