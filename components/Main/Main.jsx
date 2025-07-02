import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Main = ({ setLogoText, characters, setCharacters }) => {
  const [isShowArticle, setShowArticle] = useState(true);

  const onCharacterDelete = (id) => {
    const filteredCharacters = characters.filter((c) => c.id !== id);
    setCharacters(filteredCharacters);
  };

  console.log(characters);

  return (
    <main className={styles.main}>
      {isShowArticle && <h1>Articles</h1>}
      <div>
        {[...characters]
          .filter((c) => c.yearOfBirth)
          .sort((a, b) => (a.yearOfBirth < b.yearOfBirth ? -1 : 1))
          .slice(0, 10)
          .map((c) => {
            return (
              <Article key={c.id} character={c} onDelete={onCharacterDelete} />
            );
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
