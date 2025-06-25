import styles from "./styles.module.css";
import Article from "../Article/Article";

const Main = () => {
  return (
    <main className={styles.main}>
      <Article />
      <Article />
      <Article />
    </main>
  );
};

export default Main;
