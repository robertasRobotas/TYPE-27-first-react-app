import styles from "./styles.module.css";
import personImg from "../../assets/person.png";

const Article = ({ character, onDelete }) => {
  const img = !!character.image ? character.image : personImg.src;

  return (
    <div onClick={() => onDelete(character.id)} className={styles.article}>
      <img src={img} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default Article;
