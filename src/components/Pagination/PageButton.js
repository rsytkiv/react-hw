import React, { useState, useEffect } from "react";
import classes from "./Pagination.module.scss";

const PageButton = ({ currentPage, number, paginate, lastNumber }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let visiblePagesCount = 2;
    // if first or last - display 2 next OR prev pages
    // else display 1 next AND 1 prev pages
    if (currentPage === lastNumber || currentPage === 1) {
      visiblePagesCount = 3;
    }

    setIsHidden(Math.abs(number - currentPage) >= visiblePagesCount);
  }, [currentPage, number, lastNumber]);

  return (
    <button
      hidden={isHidden}
      className={`${classes.PaginationItem} ${currentPage === number && classes.PaginationItemActive}`}
      onClick={() => paginate(number)}
    >
      {number}
    </button>
  );
};

export default PageButton;
