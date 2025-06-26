import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Fotter/Footer";

const MainPage = () => {
  const logoText = "TYPE 27";

  return (
    <>
      <Header logo={logoText} />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
