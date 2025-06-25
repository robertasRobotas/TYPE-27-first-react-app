import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>TYPE27</div>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
