import React from "react";

const Home = () => {
  return (
    <div className="Parent">
      <div className="flex  flex-col flex-grow h-screen border border-black m-2 ">
        <div className="flex h-1/5 bg-orange-200 border border-black  justify-center items-center m-2">A</div>
        <div className="flex flex-grow max-sm:flex-col m-2">
          <div className="flex flex-grow mr-4 justify-center max-sm:w-full items-center max-sm:flex-grow   w-3/5 bg-orange-200 border border-black ">B</div>
          <div className="flex w-2/5 border max-sm:w-full bg-orange-200 border-black  justify-center max-sm:h-1/5 max-sm:mt-4 items-center ">C</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
