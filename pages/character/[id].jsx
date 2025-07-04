import { useRouter } from "next/router";
import styles from "./styles.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const [character, setCharacter] = useState(null);

  const fetchCharacters = async () => {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/character/${router.query.id}`
    );

    setCharacter(response.data[0]);
  };

  useEffect(() => {
    router.query.id && fetchCharacters();
  }, [router.query.id]);

  return (
    <>
      {character && (
        <div className={styles.wrapper}>
          <h1>{character.name}</h1>
          <img src={character.image} />

          <div className={styles.alternativeNames}>
            {character.alternate_names.map((names) => {
              return <div className={styles.alternativeName}>{names}</div>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
