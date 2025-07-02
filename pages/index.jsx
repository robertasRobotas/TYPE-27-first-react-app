import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Fotter/Footer";
import Spinner from "../components/Spinner/Spinner";
const MainPage = () => {
  const [logoText, setLogoText] = useState("TYPE 27");
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const linksArray = [
    { link: "/home", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];

  const onCharactersDelete = () => {
    setCharacters([]);
  };

  return (
    <>
      <Header logo={logoText} linksArray={linksArray} />
      <button onClick={onCharactersDelete}>remove all characters</button>

      {characters ? (
        <Main
          setLogoText={setLogoText}
          characters={characters}
          setCharacters={setCharacters}
        />
      ) : (
        <Spinner />
      )}

      <Footer />
    </>
  );
};

export default MainPage;
