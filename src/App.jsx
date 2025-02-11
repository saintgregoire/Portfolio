import DialogMessage from './components/DialogMessage/DialogMessage';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SnackbarMessage from './components/SnackbarMessage';
import './styles/fonts.css';

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer />
      <SnackbarMessage />
      <DialogMessage />
    </>
  )
}

export default App
