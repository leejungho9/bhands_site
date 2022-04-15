import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.bar}></div>
      <header>
        <div className={styles.inner}>
          <a href="/" className={styles.logo}>
            <img src="./images/logo.png" alt="로고" />
          </a>
          <input type="checkbox" id={styles.input} />
          <label htmlFor={styles.input}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className={styles.sidebar}></div>
        </div>
        <hr />
      </header>
    </>
  );
}
