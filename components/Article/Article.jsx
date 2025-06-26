import styles from "./styles.module.css";

const Article = ({ title, imgUrl }) => {
  return (
    <div className={styles.article}>
      <img src={imgUrl} />
      <h2>{title}</h2>
    </div>
  );
};

export default Article;
