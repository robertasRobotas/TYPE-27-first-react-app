import styles from "./styles.module.css";

const Header = ({ logo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{logo}</div>
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
