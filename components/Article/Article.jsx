import styles from "./styles.module.css";
import personImg from "../../assets/person.png";
import Link from "next/link";

const Article = ({ character }) => {
  const img = !!character.image ? character.image : personImg.src;

  return (
    <Link href={`/character/${character.id}`}>
      <div className={styles.article}>
        <img src={img} />
        <h2>{character.name}</h2>
      </div>
    </Link>
  );
};

export default Article;
