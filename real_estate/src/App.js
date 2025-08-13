import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './nav_footerComponents/NavBar';
import Home from './home/Home';
import PopularDetails from './popularHomeDetails/PopularDetails';
import AgentFile from './agentFiles/AgentFile';
import AgentPost from './agentFiles/AgentPost';
import Favourite from './favourite/Favourite';
import ContactSupport from './contactUs/ContactSupport';
import Contact from './contactUs/Contact';
import ContactAgent from './contactUs/ContactAgent';
import ContactMarketer from './contactUs/ContactMarketer';
import Properties from './propertiesFolder/Properties';
import NewProperties from './propertiesFolder/NewProperties';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/popularDetails' Component={PopularDetails} />
      <Route path='/contact_gent' Component={ContactAgent} />
      <Route path='/agent_file' Component={AgentFile} />
      <Route path='/agentPost' Component={AgentPost} />
      <Route path='/favourite' Component={Favourite} />
      <Route path='/contact' Component={Contact} />
      <Route path='/contact_support' Component={ContactSupport} />
      <Route path='/contact_marketer' Component={ContactMarketer} />
      <Route path='properties' Component={Properties} />
      <Route path='newProperties' Component={NewProperties} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
