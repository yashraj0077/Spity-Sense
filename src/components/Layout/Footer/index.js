import styles from "./index.module.scss";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      {/* Left */}
      <div className={styles.left}>
        {/* Copy right text */}
        <Link href="https://github.com/Just-Moh-it" passHref>
          <a className={styles.footerLink}>&copy; Mohit Yadav</a>
        </Link>
      </div>

      {/* Right */}
      <div className={styles.right}>
        {/* Copy right text */}Design:{" "}
        <Link href="https://github.com/Just-Moh-it" passHref>
          <a className={styles.footerLink}>Minh Phan</a>
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
