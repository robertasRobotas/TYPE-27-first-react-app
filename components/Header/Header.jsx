import styles from "./styles.module.css";
import burgerBtn from "../../assets/burger-btn.svg";
import { useState } from "react";

const Header = ({ logo }) => {
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const linksArray = [
    { link: "/home", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];

  return (
    <>
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

        <button
          className={styles.burgerBtn}
          onClick={() => setHeaderOpen(!isHeaderOpen)}
        >
          <img src={burgerBtn.src} />
        </button>
      </div>
      {isHeaderOpen && <div className={styles.overlay}></div>}
    </>
  );
};

export default Header;
