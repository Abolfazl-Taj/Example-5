import Header from './Components/Header/Head';
import Nav from './Components/NavBar/Nav';
import About from './Components/About/About';
import Exp from './Components/Experince/Experince'

import './App.css';
import Team from './Components/Team/Team';
import Price from './Components/Price/Price';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  
      <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Team></Team>
      <Exp></Exp>
      <Price></Price>
      <Footer></Footer>
      </>
  );
}

export default App;
