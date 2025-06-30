import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Main = ({ setLogoText, characters }) => {
  const [isShowArticle, setShowArticle] = useState(true);

  return (
    <main className={styles.main}>
      {isShowArticle && <h1>Articles</h1>}
      <div>
        {characters.map((c) => {
          return <Article key={c.id} title={c.name} imgUrl={c.image} />;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => {
            setLogoText("TYPE 28");
          }}
        >
          change
        </button>
      </div>
    </main>
  );
};

export default Main;
