import React from 'react';
import PropTypes from 'prop-types';

import './pagination.css';

const Pagination = ({ onClick, page, lastPage }) => (
  <div className="paginationWrapper">
    { page !== 0 && <button onClick={onClick} data-name="prev">{'<<'}</button> }
    { page !== lastPage - 1 && <button onClick={onClick} data-name="next">{'>>'}</button> }
  </div>
);

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  lastPage: PropTypes.number,
};

Pagination.defaultProps = {
  page: 0,
  lastPage: 0,
};

export default Pagination;
