import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Fotter/Footer";
import Spinner from "../components/Spinner/Spinner";
const MainPage = () => {
  const [logoText, setLogoText] = useState("TYPE 27");
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Header logo={logoText} />
      {characters.length > 0 ? (
        <Main setLogoText={setLogoText} characters={characters} />
      ) : (
        <Spinner />
      )}

      <Footer />
    </>
  );
};

export default MainPage;
