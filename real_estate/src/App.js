import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './nav_footerComponents/NavBar';
import Home from './home/Home';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' Component={Home} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
