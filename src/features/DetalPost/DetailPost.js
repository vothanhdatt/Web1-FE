import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPostRequest } from "../../redux/actions";
import * as moment from "moment";
import env from "../../env";

/* GET detailPost
 *   Call api lấy chi tiết bài viết
 * Hiển thị ra giao diện
 */
function DetailPost(props) {
  const dispatch = useDispatch();
  //detail post
  const getDetailPost = useSelector((state) => state.getDetailPostReducer.data);
  useEffect(() => {
    dispatch(
      getDetailPostRequest({
        postID: props.match.params.id,
      })
    );
  }, [props.match.params.id]);

  if (getDetailPost) {
    return (
      <div>
        <Header />
        <div className="max-w-5xl mx-auto mb-7">
          <div className="mt-14">
            <div className="px-2 font-sans font-bold text-4xl h3">
              {getDetailPost.name}
            </div>
            <div className="flex pl-2 my-10">
              <div className="w-16 h-16 ">
                <img
                  className="w-16 border-2 border-blue-500 rounded-full h-16"
                  src={getDetailPost.authorAvatar}
                />
              </div>
              <div className="pl-2 mb-1 whitespace-normal text-sm  ">
                <Link className="pr-2 font-bold text-blue-600 text-xl">
                  {getDetailPost.authorFirstName} {getDetailPost.authorLastName}
                </Link>
                <i
                  className="text-blue-600 fa fa-check-circle fa-2x"
                  aria-hidden="true"
                ></i>
                <p className="pt-1 text-base">
                  {moment(getDetailPost.created_at).format("DD/MM/YYYY")} -{" "}
                  {getDetailPost.views} View
                </p>
              </div>
            </div>
            <div className="px-2 w-auto">
              <img
                className="mx-auto my-10 rounded-xl w-auto"
                src={env.URL_IMAGE + getDetailPost.image}
              />
            </div>
            <div className="px-2">
              <div className="text-base text-justify sm:text-lg md:text-xl lg:text-lg xl:text-xl content">
                <div className="px-2">
                  <div
                    className="text-base text-justify sm:text-lg md:text-xl lg:text-lg xl:text-xl content"
                    dangerouslySetInnerHTML={{
                      __html: getDetailPost.content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <span className="star">
                <svg
                  className="w-10 h-10 text-yellow-400 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              4
              <i
                class="fa fa-commenting-o  sm:fa-3x ml-5 mr-1 fa-2x"
                aria-hidden="true"
              ></i>
              3
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-center w-full h-full bg-white opacity-75 fixed">
        <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }
}

export default DetailPost;
