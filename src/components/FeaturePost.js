import React from 'react';
import PropTypes from 'prop-types';

FeaturePost.propTypes = {
    
};

function FeaturePost(props) {
    return (
    <div className="flex p-2 py-3 rounded-lg hover:bg-gray-200 items-center">
        <div className="mr-3">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/130"
          />
        </div>
        <div className="col-span-2 text-xs -pt-1 lg:ml-8 xl:ml-0 content-center">
            <div className="w-52">
            <p className="font-sans font-bold whitespace-normal sm:text-sm lg:text-base overflow-hidden line-clamp-3 overflow-ellipsis">
            Samsung khoe quy trình test độ bền của Z Fold3/Z Flip3
            Samsung khoe quy trình test độ bền của Z Fold3/Z Flip3
            </p>
            </div>
        </div>
    </div>
    );
}

export default FeaturePost;