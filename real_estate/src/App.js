import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import About from './aboutFolder/About';
import Login from './formFolder/Login';
import Register from './formFolder/Register';
import AgentDashBoard from './agent_dashboards/AgentDashBoard';
import AdminDashboard from './adminDashboard/AdminDashboard';



function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin_dashboard';

  return (
    <>
      {!isAdminPage && <NavBar />}
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
        <Route path='about' Component={About} />
        <Route path='login' Component={Login} />
        <Route path='register' Component={Register} />
        <Route path='agent_dashboard' Component={AgentDashBoard} />
        <Route path='admin_dashboard' Component={AdminDashboard} />
      </Routes>
    </>
  );
}

export default App;


