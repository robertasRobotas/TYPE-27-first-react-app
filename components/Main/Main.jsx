import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Main = () => {
  const [articles, setArticles] = useState([
    {
      title: "Lietuviai skrenda atostogom i uzsieni",
      imgUrl:
        "https://tv3.lt/Uploads/UArticles/leadPhotos/c9/14/0e/f8/c9140ef85d741c466ed2d095fa0c2be0.jpg",
    },
    {
      title:
        "„Fenerbahče“ iki Turkijos lygos titulo atvedęs Jasikevičius: tai yra istorinis sezonas",
      imgUrl:
        "https://images.eurohoops.net/2025/06/d38046c2-fenerbahce-beko-950x500.jpg",
    },
    {
      title: "Skelbiami dar keturių egzaminų pirmų dalių rezultatai",
      imgUrl:
        "https://s1.15min.lt/images/photos/2014/06/10/original/antradieni-salies-abiturientai-laiko-valstybini-istorijos-brandos-egzamina-5396a617c023d.jpg",
    },
  ]);

  const [isShowArticle, setShowArticle] = useState(true);

  return (
    <main className={styles.main}>
      {isShowArticle && <h1>Articles</h1>}
      <div>
        <Article title={articles[0].title} imgUrl={articles[0].imgUrl} />
        <Article title={articles[1].title} imgUrl={articles[1].imgUrl} />
        <Article title={articles[2].title} imgUrl={articles[2].imgUrl} />
      </div>
    </main>
  );
};

export default Main;
