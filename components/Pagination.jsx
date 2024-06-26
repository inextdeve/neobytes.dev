import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { cmsServer } from "../config/server";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ current }) => {
  const [pageNumbers, setPageNumbers] = useState(1);
  const [currentPage, setCurrentPage] = useState(current || 1);

  const updateCurrentPage = (e) => {
    //Set The New Active Page
    setCurrentPage(parseInt(e.target.dataset.pageNumber));
  };
  const handlePrevPage = (i) => {
    return () => setCurrentPage((prev) => prev + i);
  };

  useEffect(() => {
    void (async function () {
      // const countPages = Math.ceil((await countDocs()) / 5); // 5 Posts Per Page

      const response = await fetch(
        `${cmsServer}/api/posts?fields[0]=createdAt`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
          },
        }
      );

      const articles = await response.json();
      const countPages = Math.ceil(articles.meta.pagination.total / 5); // 5 Posts Per Page

      setPageNumbers(countPages);
    })();
  }, []);
  function generateLinks() {
    const links = [];
    for (let i = 1; i < pageNumbers + 1; i++) {
      if (i === 1) {
        links.push(
          <Link key={`page-link-${i}`} href={`/blog`} passHref legacyBehavior>
            <a
              onClick={updateCurrentPage}
              className={`${styles.pageButton} ${
                currentPage === i ? styles.activePage : ""
              }`}
              data-page-number={i}
              aria-label={`blog page ${i}`}
            >
              {i}
            </a>
          </Link>
        );
        continue;
      }
      links.push(
        <Link
          key={`page-link-${i}`}
          href={`/blog/page/${i}`}
          passHref
          legacyBehavior
        >
          <a
            data-page-number={i}
            onClick={updateCurrentPage}
            className={`${styles.pageButton} ${
              currentPage === i ? styles.activePage : ""
            }`}
            aria-label={`blog page ${i}`}
          >
            {i}
          </a>
        </Link>
      );
    }
    return links;
  }

  return (
    <div className="pagination container-md">
      <div className={styles.paginationButtons}>
        {currentPage > 1 ? (
          <Link href={`/blog/page/${currentPage - 1}`} passHref legacyBehavior>
            <a
              className={`${styles.pageButton}`}
              onClick={handlePrevPage(-1)}
              aria-label={`previous blog page`}
            >
              <AiOutlineArrowLeft />
            </a>
          </Link>
        ) : null}
        {generateLinks()}
        {currentPage < pageNumbers ? (
          <Link href={`/blog/page/${currentPage + 1}`} passHref legacyBehavior>
            <a
              className={`${styles.pageButton}`}
              onClick={handlePrevPage(1)}
              aria-label={`next blog page`}
            >
              <AiOutlineArrowRight />
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
