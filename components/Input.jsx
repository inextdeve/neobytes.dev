import styles from "../styles/Input.module.css";

const Input = ({
  type,
  name,
  placeholder,
  required,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {type === "textarea" ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value || ""}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={styles.input}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value || ""}
          onChange={onChange}
        />
      )}
    </div>
  );
};
export default Input;
