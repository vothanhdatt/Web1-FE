import React from "react";
import PropTypes from "prop-types";

FeaturePost.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
};

FeaturePost.defaul = {
  image: "",
  description: "",
  name: "",
};

function FeaturePost(props) {
  const { featurePost } = props;
  if (featurePost) {
    return (
      <>
        {featurePost.map((post) => (
          <div
            className="flex p-2 py-3 rounded-lg hover:bg-gray-200 items-center"
            key={post.id}
          >
            <div className="mr-3">
              <img className="rounded-lg" src={post.image} />
            </div>
            <div className="col-span-2 text-xs -pt-1 lg:ml-8 xl:ml-0 content-center">
              <div className="w-52">
                <p className="font-sans font-bold whitespace-normal sm:text-sm lg:text-base overflow-hidden line-clamp-3 overflow-ellipsis">
                  {post.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return <div>featurePost</div>;
  }
}

export default FeaturePost;
