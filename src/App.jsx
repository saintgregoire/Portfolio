import { useEffect } from "react";
import DialogMessage from "./components/DialogMessage/DialogMessage";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SnackbarMessage from "./components/SnackbarMessage";
import "./i18n/i18n";
import "./styles/fonts.css";
import { useTranslation } from "react-i18next";
import CookieSnackbar from "./components/CookieSnackbar";

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  },[i18n.language]);

  useEffect(() => {
    document.title = t("title");
  },[i18n.language, t])

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <SnackbarMessage />
      <DialogMessage />
      <CookieSnackbar />
    </>
  );
}

export default App;
