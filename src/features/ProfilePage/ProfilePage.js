// Packages
import { Link, Redirect, useHistory } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { getProfileRequest } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// Constant
import routes from "../../constant/routes";
// Components
import Header from "../../components/Header";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let history = useHistory();
  const dispatch = useDispatch();
  //
  const onHandleUpdate = () => {
    //Vào trang cập nhật bài viết
  };
  //
  const onHandleNewPost = () => {
    //Vào trang tạo bài viết
    history.push(routes.createpost);
  };
  //
  useEffect(() => {
    dispatch(getProfileRequest());
  }, []);
  const profile = useSelector((state) => state.getProfileReducer.data);

  return (
    <>
      {/* Header */}
      <Header></Header>
      {/* Profile */}
      {profile && (
        <main className="profile-page bg-gray-200 pb-5">
          <section className="relative block" style={{ height: "500px" }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute "
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <></>
          <section className="relative pt-16  bg-gray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={(profile.avatar && profile.avatar) || ""}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={onHandleUpdate}
                        >
                          Update
                        </button>
                        <button
                          className="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={onHandleNewPost}
                        >
                          New post
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            100
                          </span>
                          <span className="text-sm text-gray-500">Posts</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            4.5
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="text-sm text-gray-500">Rating</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            89
                          </span>
                          <span className="text-sm text-gray-500">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      {profile.first_name + " " + profile.last_name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      ({profile.gender === "1" && "Male"}
                      {profile.gender === "2" && "Female"}
                      {profile.gender === "0" && "Orther"})
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                      <i className="fa fa-phone-square mr-2 text-lg text-gray-500"></i>
                      {(profile.phone && profile.phone) || "Unknow"}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          {(profile.description && profile.description) ||
                            "Unknow"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="grid-cols-6 grid-rows-1 gap-4 mx-auto max-w-6xl lg:grid my-7 px-10 ">
            <div className="col-span-6">
              <div>
                <div className="bg-gray-200   justify-center">
                  {/* Component Post*/}
                  <div>
                    <div className="flex w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto  mb-5">
                      <div className="flex items-center w-full">
                        <div className="w-full">
                          <div className="flex flex-row mt-2 px-2 py-3 mx-3 justify-between">
                            <div className="flex flex-row ">
                              <div className="w-auto h-auto rounded-full border-2 border-pink-500">
                                <img
                                  className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                                  alt="User avatar"
                                  src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                                />
                              </div>
                              <div className="flex flex-col mb-2 ml-4 mt-1">
                                <div className="text-gray-600 text-sm font-semibold">
                                  Võ Thành Đẹc
                                </div>
                                <div className="flex w-full mt-1">
                                  <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                    public
                                  </div>
                                  <div className="text-gray-400 font-thin text-xs">
                                    • 12/10/2021
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Options
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            to={`/detailpost/123`}
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            View
                                          </Link>
                                        )}
                                      </Menu.Item>

                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href=""
                                            //to={routes.updatepost + post.id}
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            Update
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <p
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            Delete
                                          </p>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </div>
                          <div className="border-b border-gray-100"></div>
                          <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2 ">
                            <img
                              className="w-screen "
                              src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
                            />{" "}
                          </div>
                          <Link
                            className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2"
                            to={`/detailpost/123`}
                          >
                            Post Name
                          </Link>
                          <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2 ">
                            Đây là content
                          </div>

                          <Link
                            className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2"
                            to={`/detailpost/123`}
                          >
                            ...xem thêm
                          </Link>

                          <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row">
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Comments:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {" "}
                                  123
                                </div>
                              </div>
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Views:{" "}
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {" "}
                                  999
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end">
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Rating:{" "}
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {" "}
                                  4.5
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Loadmore
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      {/* <Footer></Footer> */}
    </>
  );
}
