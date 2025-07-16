import React from 'react'
import HomeLandingPage from './homeComponents/HomeLandingPage';
import OurPopularHomes from './homeComponents/OurPopularHomes';
import ReachOut from './homeComponents/ReachOut';
import Testimonies from './homeComponents/Testimonies';
import Agent from './homeComponents/Agent';
import NewsLetter from './homeComponents/NewsLetter';

const Home = () => {
  return (
    <div>
      <HomeLandingPage />
      <OurPopularHomes />
      <ReachOut />
      <Testimonies />
      <Agent />
      <NewsLetter />
    </div>
  )
}

export default Home
