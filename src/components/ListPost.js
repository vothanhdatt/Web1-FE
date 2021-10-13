import React, { useState } from "react";
import PropTypes from "prop-types";

ListPost.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  created_at: PropTypes.string,
};

ListPost.defaultProps = {
  image: "",
  name: "",
  description: "",
  category: "",
  name: "",
  created_at: "",
};

function ListPost(props) {
  const { post } = props;
  //lodamore
  const [noOfElement, setNoOfElement] = useState(5);
  const [count, setCount] = useState();
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
    if (noOfElement + noOfElement > post.length) {
      setCount(post.length);
    } else {
      setCount(noOfElement + noOfElement);
    }
  };
  if (post) {
    const slice = post.slice(0, noOfElement);
    return (
      <>
        {slice.map((post) => (
          <div
            className="flex p-2 py-3 rounded-lg hover:bg-gray-200 items-start "
            key={post.id}
          >
            <div className="mr-2">
              <img
                className="rounded-lg "
                src="https://via.placeholder.com/200x130"
              />
            </div>
            <div className="flex-grow overflow-ellipsis break-words w-1">
              <p className="font-sans text-xl font-bold py-1">{post.name}</p>
              <div className="">
                <p className="text-sm font-sans whitespace-normal overflow-hidden line-clamp-2 overflow-ellipsis break-words  ">
                  {post.description}
                </p>
              </div>
              <div className="flex text-xs items-center py-1">
                <div className="mr-3">
                  <img
                    className="w-6 h-6 border-2 border-blue-500 rounded-full "
                    src="https://via.placeholder.com/60x60"
                  />
                </div>
                <div className="">Trần văn lâp</div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 text-center sm:mt-5">
          <button
            hidden={count == post.length || post.length == 0}
            className="p-1 px-2 text-xs font-bold bg-gray-200 rounded-lg btn btn-dark d-block w-100 sm:text-sm hover:bg-blue-300"
            onClick={() => loadMore()}
          >
            Xem Thêm Bài Viết
          </button>
        </div>
      </>
    );
  } else {
    return <div>123</div>;
  }
}

export default ListPost;