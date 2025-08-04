import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './nav_footerComponents/NavBar';
import Home from './home/Home';
import PopularDetails from './popularHomeDetails/PopularDetails';
import NewProperties from './newProperties/NewProperties';
import AgentFile from './agentFiles/AgentFile';
import AgentPost from './agentFiles/AgentPost';
import Favourite from './favourite/Favourite';
import ContactUs from './contactUs/ContactUs';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/popularDetails' Component={PopularDetails} />
      <Route path='/newProperties' Component={NewProperties} />
      <Route path='/agent_file' Component={AgentFile} />
      <Route path='/agentPost' Component={AgentPost} />
      <Route path='/favourite' Component={Favourite} />
      <Route path='/contact' Component={ContactUs} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
