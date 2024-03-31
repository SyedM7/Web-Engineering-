import React from "react";

const Home = () => {
  return (
    <div className="Parent flex flex-col p-5">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <div className="bg-orange-200 border border-black p-2 w-1/2 text-center">Logo</div>
          <div className="flex">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className=" bg-orange-200 border border-black p-8 mt-3 w-1/2 mr-6 text-center">
              Card
            </div>
          </div>
          <div className="flex">
            <div className=" bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 mr-6 text-center">
            Card
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 mr-6 text-center">
              Card
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 mr-6 text-center">
              Card
            </div>
          </div>
          <div className="bg-orange-200 border border-black mt-3 p-8 mr-6 text-center">
            Banner
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="bg-orange-200 border border-black text-center p-2">Navigation</div>
          <div className="flex ">
            <div className=" bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 text-center">
              Card
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 text-center">
              Card
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 text-center">
              Card
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-200 border border-black p-8 mt-3 mr-6 w-1/2 text-center">
              Card
            </div>
            <div className="bg-orange-200 border border-black p-8 mt-3 w-1/2 text-center">
              Card
            </div>
          </div>
          <div className="bg-orange-200 border border-black w-full mt-3 p-8 text-center">
            Banner
          </div>
        </div>
      </div>
      <div className=" bg-orange-200 border border-black mt-3 text-center p-2">Footer</div>
    </div>
  );
};

export default Home;