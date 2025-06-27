import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Fotter/Footer";
import { useState } from "react";
import callendarImg from "../assets/callendar.png";

const MainPage = () => {
  const [logoText, setLogoText] = useState("TYPE 27");

  console.log(callendarImg);

  return (
    <>
      <Header logo={logoText} />
      <Main setLogoText={setLogoText} />
      <Footer />
      <img src={callendarImg.src} alt="" />
    </>
  );
};

export default MainPage;
