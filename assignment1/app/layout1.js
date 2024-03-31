import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col p-5 h-screen">
      <div className="flex justify-between">
        <div className="bg-orange-200 border border-black p-5">Logo</div>
        <div className="bg-orange-200 border border-black p-5">Logo</div>
      </div>
      <div className="bg-orange-200 border border-black p-5 text-center mt-3">Navigation</div>
      <div className="bg-orange-200 border border-black p-7 text-center mt-3">Header/Banner</div>
      <div className="mt-3 flex flex-grow">
        <div className="bg-orange-200 border border-black w-1/3 flex justify-center items-center">SideBar</div>
        <div className="bg-orange-200 border border-black w-2/3 ml-3 flex justify-center items-center">Main Content</div>
      </div>
      <div className="bg-orange-200 border border-black p-5 text-center mt-3">Footer</div>
    </div>
  );
  }
  export default Home;