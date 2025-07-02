import styles from "./styles.module.css";

const Header = ({ logo, linksArray }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <nav>
        <ul>
          {linksArray.map((la) => {
            return (
              <li>
                <a href={la.link}>{la.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
