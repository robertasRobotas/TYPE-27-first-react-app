import styles from "./styles.module.css";

const Article = ({ title, imgUrl }) => {
  const onCardClick = (xxx) => {
    console.log(title);
  };

  return (
    <div onClick={onCardClick} className={styles.article}>
      <img src={imgUrl} />
      <h2>{title}</h2>
    </div>
  );
};

export default Article;
