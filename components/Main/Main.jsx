import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Main = ({ setLogoText }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Lietuviai skrenda atostogom i uzsieni",
      imgUrl:
        "https://tv3.lt/Uploads/UArticles/leadPhotos/c9/14/0e/f8/c9140ef85d741c466ed2d095fa0c2be0.jpg",
    },
    {
      id: 2,
      title:
        "„Fenerbahče“ iki Turkijos lygos titulo atvedęs Jasikevičius: tai yra istorinis sezonas",
      imgUrl:
        "https://images.eurohoops.net/2025/06/d38046c2-fenerbahce-beko-950x500.jpg",
    },
    {
      id: 3,
      title: "Skelbiami dar keturių egzaminų pirmų dalių rezultatai",
      imgUrl:
        "https://s1.15min.lt/images/photos/2014/06/10/original/antradieni-salies-abiturientai-laiko-valstybini-istorijos-brandos-egzamina-5396a617c023d.jpg",
    },
    {
      id: 4,
      title: "Skelbiami dar keturių egzaminų pirmų dalių rezultatai",
      imgUrl:
        "https://s1.15min.lt/images/photos/2014/06/10/original/antradieni-salies-abiturientai-laiko-valstybini-istorijos-brandos-egzamina-5396a617c023d.jpg",
    },
    {
      id: 5,
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
        {articles.map((a) => {
          return <Article key={a.id} title={a.title} imgUrl={a.imgUrl} />;
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
