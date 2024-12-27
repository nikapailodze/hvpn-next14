import styles from "./PasswordStreng.module.scss";
const PasswordStrength = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.passwordStrengthContainer}>
        <p className={styles.subText}>Password strength</p>

        <div className={styles.strengthIndicator}>
          <span className={styles.strengthIndicatorItem}></span>
          <span className={styles.strengthIndicatorItem}></span>
          <span className={styles.strengthIndicatorItem}></span>
          <span className={styles.strengthIndicatorItem}></span>
          <span className={styles.strengthIndicatorItem}></span>
        </div>

        <p className={styles.subText}>
          Password must have at least 8 characters, uppercase and lowercase
          letters, and symbols. Never reuse old passwords.{" "}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;
