import Link from "next/link";
import { useRouter } from "next/router";
import Input from "./Input";
import { useState } from "react";

import styles from "../styles/BlogLayout.module.css";

const BlogLayout = ({ children }) => {
  const initialForm = {
    search: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/blog/search",
      query: { q: formData.search },
    });
  };

  return (
    <>
      <header>
        <div className="container">
          <div className={`${styles.title} bg-gradient`}>
            <h1>Neobytes Blog</h1>
          </div>
          <div className="container-md">
            <div className="search-box">
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <Input
                  type="search"
                  placeholder="Search"
                  name="search"
                  onChange={handleInputChange}
                  value={formData.search}
                />
                <button className="btn-primary">Search</button>
              </form>
            </div>
            <div className={`${styles.tagsContainer}`}>
              <Link href="/blog" passHref legacyBehavior>
                <a
                  className={`${styles.tag} btn-primary ${styles.bgGradient}`}
                  aria-label="all categories"
                >
                  all
                </a>
              </Link>
              <Link href="/blog/category/reactjs" passHref legacyBehavior>
                <a
                  className={`${styles.tag} btn-primary`}
                  aria-label="react.js category"
                >
                  reactjs
                </a>
              </Link>
              <Link href="/blog/category/nextjs" passHref legacyBehavior>
                <a
                  className={`${styles.tag} btn-primary`}
                  aria-label="mongodb category"
                >
                  nextjs
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="container-md">{children}</section>
    </>
  );
};

export default BlogLayout;
