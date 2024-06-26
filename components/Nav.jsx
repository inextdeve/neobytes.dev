import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useRef } from "react";
const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuClick = () => setIsMenuVisible((prev) => !prev);
  const closeMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };
  const navRef = useRef();

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className="container">
        <div className={styles.navigation}>
          <Link href="/" passHref legacyBehavior>
            <a className={styles.logo}>Neobytes</a>
          </Link>

          <ul
            className={`${styles.navLinks} ${
              isMenuVisible ? styles.showMenu : styles.hideMenu
            }`}
          >
            <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  aria-label="home page"
                >
                  home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects" passHref legacyBehavior>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  aria-label="our work"
                >
                  our works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref legacyBehavior>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  aria-label="services"
                >
                  services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" passHref legacyBehavior>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  aria-label="contact us"
                >
                  Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref legacyBehavior>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  aria-label="blog"
                >
                  blog
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={`${styles.menuButton} ${styles.hideMenuButton}`}
            onClick={handleMenuClick}
            aria-label="menu"
          >
            <BiMenuAltRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
