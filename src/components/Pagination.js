import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.number,
  onPageChange: PropTypes.func,
  totalPage: PropTypes.string,
};

Pagination.defaultProps = {
  onPageChange: null,
  totalPage: "",
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page123 } = props;
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  if (page123) {
    return (
      <div className="flex justify-end ">
        <div className="p-1">
          <button
            className="px-4 py-2 rotate-180 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={pagination <= 1}
            onClick={() => handlePageChange(pagination - 1)}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </div>
        <div className="p-1">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 "
            disabled={pagination >= page123.totalPage}
            onClick={() => handlePageChange(pagination + 1)}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Pagination;
