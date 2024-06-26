import styles from "../styles/SimpleCard.module.css";
const SimpleCard = ({ title, text, icon, variant, className }) => {
  return (
    <div
      className={`${className} ${styles.simpleCard} ${
        variant == 2 ? `${styles.gray} ${styles.variant2}` : ""
      }`}
    >
      {icon ? (
        <div className="simple-card-icon">
          <span
            className={`${variant === 3 ? styles.variant3Icon : null} ${
              styles.icon
            }`}
          >
            {icon}
          </span>
        </div>
      ) : null}
      <h3 className={styles.simpleCardHeading}>{title}</h3>
      <p className={`inext-text ${styles.variant2Text}`}>{text}</p>
    </div>
  );
};
export default SimpleCard;
