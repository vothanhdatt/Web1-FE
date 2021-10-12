import React, { useState, useEffect } from "react";


HomePage.propTypes = {};

function HomePage(props) {
  
    return (
      <div>
        <div className="grid-cols-3 grid-rows-1 gap-4 mx-auto max-w-7xl lg:grid my-7">
          <div className="col-span-1">
            <h1 className="pb-1 pl-2 mt-2 text-lg font-bold text-left">
              Thành Viên Nổi Bật{" "}
            </h1>
            <div className="flex flex-row overflow-auto lg:flex-col">
            </div>
            <h1 className="pb-1 pl-2 mt-2 text-lg font-bold text-left">
              Bài Viết Nổi Bật{" "}
            </h1>
            <div className="flex flex-row overflow-auto lg:flex-col">
            </div>
          </div>
          <div className="col-span-2">
            <div>
            </div>
          </div>
        </div>
      </div>

    );
}
export default HomePage;
