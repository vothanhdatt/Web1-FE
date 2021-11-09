import React, { useState, useEffect } from "react";
import FeaturePost from "../../components/FeaturePost";
import ListPost from "../../components/ListPost";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoriesRequest,
  getFeaturePostRequest,
  getPostByCategoryRequest,
} from "../../redux/actions";
import { Link, Redirect, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

HomePage.propTypes = {};

function HomePage(props) {
  const dispatch = useDispatch();

  //listCategories
  const getlistCategories = useSelector(
    (state) => state.getCategoriesReducer.data
  );
  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);
  //getPostByCategory
  const getPostByCategory = useSelector(
    (state) => state.getPostByCategoryReducer.data
  );
  //parencallback
  const [category, setCategory] = useState("*");
  const callbackFuntion = (childData) => {
    setCategory(childData);
  };
  useEffect(() => {
    dispatch(
      getPostByCategoryRequest({
        category_id: category,
      })
    );
  }, [category]);
  //feature post
  const getFeaturePost = useSelector(
    (state) => state.getFeaturePostReducer.data
  );
  useEffect(() => {
    dispatch(getFeaturePostRequest());
  }, []);
  if (getPostByCategory) {
    return (
      <>
        <div>
          <Header
            listCategories={getlistCategories}
            parenCallBack={callbackFuntion}
          />
          <div className="grid-cols-3 grid-rows-1 gap-4 mx-auto max-w-7xl lg:grid my-7 ">
            <div className="col-span-1">
              <div className="flex flex-row overflow-auto lg:flex-col"></div>
              <h1 className="pb-1 pl-2 mt-2 text-lg font-bold text-left">
                Bài Viết Nổi Bật
                <FeaturePost featurePost={getFeaturePost} />
              </h1>
              <div className="flex flex-row overflow-auto lg:flex-col"></div>
            </div>
            <div className="col-span-2">
              <h1 className="pb-1 pl-2 mt-2 text-left">
                <span className="text-lg font-bold">Danh Sách Bài Viết </span>
                <ListPost post={getPostByCategory} />
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-center w-full h-full bg-white opacity-75 fixed">
        <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }
}
export default HomePage;
