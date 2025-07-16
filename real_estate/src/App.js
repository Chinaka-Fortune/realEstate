import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './nav_footerComponents/NavBar';
import Home from './home/Home';
import PopularDetails from './popularHomeDetails/PopularDetails';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/popularDetails' Component={PopularDetails} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
