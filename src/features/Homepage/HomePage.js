import React, { useState, useEffect } from "react";
import FeaturePost from "../../components/FeaturePost";
import ListPost from "../../components/ListPost";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <div className="grid-cols-3 grid-rows-1 gap-4 mx-auto max-w-7xl lg:grid my-7">
        <div className="col-span-1">
          <div className="flex flex-row overflow-auto lg:flex-col"></div>
          <h1 className="pb-1 pl-2 mt-2 text-lg font-bold text-left">
            Bài Viết Nổi Bật <FeaturePost />
            <FeaturePost />
            <FeaturePost />
            <FeaturePost />
            <FeaturePost />
            <FeaturePost />
            <FeaturePost />
            <FeaturePost />
          </h1>
          <div className="flex flex-row overflow-auto lg:flex-col"></div>
        </div>
        <div className="col-span-2">
          <h1 className="pb-1 pl-2 mt-2 text-left">
            <span className="text-lg font-bold">Danh Sách Bài Viết </span>
            <ListPost />
            <ListPost />
            <ListPost />
            <ListPost />
            <ListPost />
            <ListPost />
            <ListPost />
          </h1>
        </div>
      </div>
    </>
  );
}
export default HomePage;
