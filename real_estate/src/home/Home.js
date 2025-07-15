import React from 'react'
import HomeLandingPage from './homeComponents/HomeLandingPage';
import OurPopularHomes from './homeComponents/OurPopularHomes';
import ReachOut from './homeComponents/ReachOut';
import Testimonies from './homeComponents/Testimonies';
import Agent from './homeComponents/Agent';

const Home = () => {
  return (
    <div>
      <HomeLandingPage />
      <OurPopularHomes />
      <ReachOut />
      <Testimonies />
      <Agent />
    </div>
  )
}

export default Home
