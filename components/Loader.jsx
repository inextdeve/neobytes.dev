import styles from "../styles/Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loadWrapp}>
      <div className={styles.loader}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Loader;
