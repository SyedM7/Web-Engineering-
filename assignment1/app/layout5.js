import React from "react";

const Home = () => {
  return (
    <div className="Parent ">
      <div className=" border h-screen border-black m-2 flex flex-col ">
        <div className="bg-orange-200 border text-center border-black p-4">Header</div>
        <div className=" flex  border border-black flex-grow">
          <div className="w-3/5 flex flex-col">
            <div className="h-2/5 bg-orange-200 border flex items-center justify-center border-black m-2">
              Video
            </div>

            <div className="flex flex-col flex-grow h-3/5 m-2 justify-evenly ">
              
              <div className=" h-1/2 grid grid-cols-3 gap-2 text-center">
                
                <div className="flex flex-col ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center ">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black  text-sm flex items-center justify-center">Content</div>               
                </div>

                <div className="flex flex-col  ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black text-sm flex items-center justify-center">Content</div>               
                </div>
                <div className="flex flex-col ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black text-sm flex items-center justify-center">Content</div>               
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-2 text-center h-1/2 mt-2">
              <div className="flex flex-col ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black text-sm flex items-center justify-center">Content</div>               
                </div>

                <div className="flex flex-col  ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black text-sm flex items-center justify-center">Content</div>               
                </div>
                <div className="flex flex-col ">
                  <div className="h-2/3 bg-orange-200 border border-black text-sm flex items-center justify-center">Thumbnail</div>
                  <div className="h-1/3 mt-2 bg-orange-200 border border-black text-sm flex items-center justify-center">Content</div>               
                </div>
              </div>
            </div>

            <div className="text-center bg-orange-200 border border-black p-3 m-2">
              Footer
            </div>
          </div>
          <div className="w-2/5 m-2 bg-orange-200  border flex items-center justify-center border-black text-center">
            SideBar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

 