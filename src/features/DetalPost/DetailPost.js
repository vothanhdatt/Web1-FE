import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPostRequest } from "../../redux/actions";
import * as moment from "moment";
import env from "../../env";
import FeaturesPost from "../../components/FeaturePost";
import { getRelatedPostRequest } from "../../redux/actions";
import {
  getCategoriesRequest,
  getFeaturePostRequest,
  getPostByCategoryRequest,
} from "../../redux/actions";
import Cookies from "universal-cookie";
import StarRating from "../../components/StarRating";
import Comment from "../../components/Comment";

/* GET detailPost
 *   Call api lấy chi tiết bài viết
 * Hiển thị ra giao diện
 */
function DetailPost(props) {
  let cookie = new Cookies();
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

  /* Call api lấy bài viết Lien quan
  Hiển thị ra giao diện
 */
  const getFeaturePost = useSelector(
    (state) => state.getFeaturePostReducer.data
  );
  useEffect(() => {
    dispatch(getFeaturePostRequest());
  }, []);

  // get star
  const [star, setStar] = useState("");
  const callbackFunction = (childData) => {
    setStar(childData);
  };

   /* Call api lấy bài viết Lien quan
  Hiển thị ra giao diện
 */
  const getRelatedPost = useSelector(
    (state) => state.getRelatedPostReducer.data
  );
  useEffect(() => {
    dispatch(
      getRelatedPostRequest({
        post_id: props.match.params.id,
      })
    );
  }, [props.match.params.id]);


  if (getDetailPost) {
    return (
      <div>
        <Header />
        <div className="grid-cols-3 grid-rows-1 gap-0 mx-auto my-10 lg:grid max-w-5xl">
          <div className="col-span-2">
            <div className="mt-14">
              <div className="px-2 font-sans font-bold text-4xl h3">
                {getDetailPost.name}
              </div>
              <div className="flex pl-2 my-10">
                <div className="w-16 h-16 ">
                  <img
                    className="w-16 border-2 border-blue-500 rounded-full h-16"
                    src={env.URL_IMAGE + getDetailPost.authorAvatar}
                  />
                </div>
                <div className="pl-2 mb-1 whitespace-normal text-sm  ">
                  <Link className="pr-2 font-bold text-blue-600 text-xl">
                    {getDetailPost.authorFirstName}{" "}
                    {getDetailPost.authorLastName}
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
            </div>
          </div>
          <div>
            <div className="pl-2 mt-60 font-sans text-2xl font-bold h3">
              Bài Viết Liên Quan
            </div>
            <div className="flex flex-row mb-1 overflow-auto lg:flex-col">
              <FeaturesPost featurePost={getRelatedPost} />
            </div>
          </div>
          {/* <div className="lg:hidden">
            <div className="pl-2 mt-5 font-sans text-2xl font-bold h3">
              Bài Viết Liên Quan
            </div>
            <div className="flex flex-row mb-1 overflow-auto lg:flex-col">
              <FeatureListPost featurePost={relatePost} />
            </div>
          </div> */}
          {/* {cookie.get("_token") ? ( */}
          <div className="flex px-2 mt-6">
            <div className="w-12 h-12">
              <img
                className="rounded-full"
                src="https://via.placeholder.com/60"
              />
            </div>

            <div className="flex flex-col justify-center w-full ml-4 ">
              <div className="w-full pb-3 sm:mx-auto">
                <div className="flex flex-col bg-white shadow-lg min-w-1xl rounded-xl">
                  <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col items-center bg-gray-200 rounded-xl">
                      {/* {cookie.get("_token") ? ( */}
                      <div>
                        {memberProfile ? (
                          <div className="pl-2 ">
                            <div className="flex mt-5 " key={memberProfile.id}>
                              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16">
                                <img
                                  className="w-10 h-10 border-2 border-indigo-500 rounded-full sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16"
                                  src={memberProfile.avatar}
                                />
                              </div>
                              <div className="pl-3 -mt-1 -mb-5 text-xs whitespace-normal">
                                <Link className="pr-2 text-lg font-bold text-indigo-500 sm:text-xl lg:text-2xl xl:text-3xl">
                                  {" "}
                                  {memberProfile.first_name}{" "}
                                  {memberProfile.last_name} Ơi!
                                  <p className="text-xs text-indigo-500 sm:text-sm md:text-md lg:text-base xl:text-lg">
                                    Bạn cảm thấy như thế nào ?
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      {/* ) : (
                        <div></div>
                      )} */}
                      <StarRating parentCallback={callbackFunction} />
                      <div className="flex flex-col w-full">
                        <textarea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          rows="3"
                          placeholder="Viết bình luận nào bạn ơi..."
                          className="p-1 text-gray-500 outline-none resize-none sm:p-3 md:p-4 lg:p-5 rounded-xl text"
                        ></textarea>
                        <button
                          type="submit"
                          className="items-end py-1 mt-2 text-lg text-white sm:mt-3 lg:mt-4 xl:mt-5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl"
                        >
                          Đánh giá
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ) : (
            <div className="pl-2 mt-5 font-sans text-sm font-bold text-center sm:mb-5 md:mb-7 sm:text-base lg:text-lg xl:text-xl">
              <h1>
                Đăng Nhập Để Đánh Giá
                <Link to={route.login}>
                  <i
                    className="mx-2 sm:mx-3 fa fa-hand-o-right lg:fa-2x"
                    aria-hidden="true"
                  ></i>
                  <span className="p-1 text-xs bg-gray-200 rounded-lg sm:text-sm sm:p-2 hover:bg-blue-300">
                    Đăng Nhập
                  </span>
                </Link>
              </h1>
            </div>
          )} */}
          <Comment commentPost={commentPost} />
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
