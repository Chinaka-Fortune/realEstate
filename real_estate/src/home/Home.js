import React from 'react'
import HomeLandingPage from './homeComponents/HomeLandingPage';
import OurPopularHomes from './homeComponents/OurPopularHomes';
import ReachOut from './homeComponents/ReachOut';

const Home = () => {
  return (
    <div>
      <HomeLandingPage />
      <OurPopularHomes />
      <ReachOut />
    </div>
  )
}

export default Home
