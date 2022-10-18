import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBar';
import {Container} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';



function App() {
  return (
    <Container>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={ <Store />} />
          <Route path="success" element={ <Success />} />
          <Route path="cancel" element={ <Cancel />} />
        </Routes>
        
        </BrowserRouter>
    </Container>
    
  );
}

export default App;
