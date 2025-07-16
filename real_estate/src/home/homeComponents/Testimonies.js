import React from 'react'

import dowload1 from '../homeImages/download.jpeg'
import dowload2 from '../homeImages/download (1).jpeg'
import dowload3 from '../homeImages/download (2).jpeg'
import dowload4 from '../homeImages/images (1).jpeg'

import TestimoniesComp from './TestimoniesComp'

const Testimonies = () => {
  return (
     <div className="container my-5 px-5">
      <h2 className='text-center fs-2 fw-bolder'>TESTIMONIALS</h2>
      <div className="row mt-4 row-gap-4 d-flex justify-content-center">
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload1} testimonyText="loren ipsum text jhhnwkl ;djuiw hdekjeo euydwh; kjhde wieuhw; kejhwu jheuehe" testimonyJob ="frontend" testimonyName ="Benedict"/>
        </div>
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload2} testimonyText="loren ipsum text jhhnwkl ;djuiwh dekj eoeuydwh; kjhdewieuhw ;kejhwu jheuehe" testimonyJob ="frontend" testimonyName ="Mrs Olarewanju"/>
        </div>
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload3} testimonyText="loren ipsum text jhhnw kl;d juiw hdekjeo euydwh; kjhdew ieuhw; kejhwu jheuehe" testimonyJob ="Full Stack" testimonyName ="Mr Fortune"/>
        </div>
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload4} testimonyText="loren ipsum text jhhnwkl ;djuiw hdekjeo euydwh; kjhdew ieuhw; kejh wujheuehe" testimonyJob ="Digital Marketer" testimonyName ="Precious"/>
        </div>
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload1} testimonyText="loren ipsum text jhhnwkl;  djuiw hdekjeo euydwh; kjhde wieuhw; kejhwuj heuehe" testimonyJob ="frontend" testimonyName ="Kendra"/>
        </div>
        <div className="col-md-5 col-lg-4 col-12">
          <TestimoniesComp testimonyPix = {dowload1} testimonyText="loren ipsum text jhhnwkl; djuiw hde kjeo euy dwh;kjh dewieuhw; kejhwujh euehe" testimonyJob ="frontend" testimonyName ="Favour"/>
        </div>
        
      </div>
     </div>
  )
}

export default Testimonies
