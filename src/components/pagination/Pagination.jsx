import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

export function Paginate({ postsPerPage, totalPostsCount, setCurrentPage }) {
  let active = 1;

  const pageCount = Math.ceil(totalPostsCount / postsPerPage);
  let pages = _.range(1, pageCount + 1);

  return (
    <div>
      <Pagination>
        {totalPostsCount &&
          pages.map((pageNumber) => (
            <Pagination.Item
              onClick={() => setCurrentPage(pageNumber)}
              key={pageNumber}
              active={pageNumber === active}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
      </Pagination>
    </div>
  );
}
