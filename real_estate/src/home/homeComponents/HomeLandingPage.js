import React from 'react'
import imageConstruct from '../../all images/imageConstruct.jpg'
import architecture from '../../all images/architecture_adesign_2020_2.webp'
import leaDesignStudio from '../../all images/lea-design-studio-gold-coast-blog-reading-architectural-drawings-101-part-a-header-1080x675.jpg'
import '../Home.css'
// import { Link } from "react-router-dom";

const HomeLandingPage = () => {


  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause ="false">
  <div className="carousel-inner">
     <div className="carousel-item caroselImage">
    <img src={imageConstruct} className="d-block w-100" alt="..."/>
      <div className="carousel-caption carouselCaption">
        <h1 className='h1Font where-h1-text'>Where Dreams Meet Keys.</h1>
        <p className='fw-bolder fs-3 where-h1-text'>Luxury Homes Where Dreams Meet Keys, Unlock Your Perfect Haven.</p>
      </div>
    </div>
    <div className="carousel-item active caroselImage">
      <img src={architecture} className="d-block w-100" alt="..."/>
      <div className="carousel-caption carouselCaption">
        <h1 className='h1Font yourHomeExpertiesText'>Your Home Journey, Our Expertise.</h1>
        <p className='fw-bolder fs-3 yourHomeExpertiesText'>Your Home Journey, Our Expertise: Guiding You Home with Care and Precision</p>
      </div>
    </div>
    <div className="carousel-item caroselImage">
      <img src={leaDesignStudio} className="d-block w-100" alt="..."/>
      <div className="carousel-caption carouselCaption">
        <h1 className='h1Font FindAperfectText'>Find a Perfect Dream House</h1>
        <p className='FindAperfectText fw-bolder fs-3'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
   
  </div>
</div>
 )
}

export default HomeLandingPage
