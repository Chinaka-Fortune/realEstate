import React from 'react'
import '../index.css'
import './ContactUs.css'

// import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='container-fluid bg-secondary-subtle' >
      <div className="row d-md-flex justify-content-center align-items-center contact-gap" style={{height:100 + 'vh'}}>
        <NavLink to='/contact_gent' className="col-sm-3 col-10 generalBoxShadow bg-info d-flex justify-content-center flex-column align-items-center py-5 rounded-2 text-decoration-none text-dark">
            <i class="bi bi-person-bounding-box fw-bolder fs-1"></i>
            <p className='fw-bolder fs-5'>Contact Agents</p>
        </NavLink>
        <NavLink to='/contact_marketer ' className="col-sm-3 col-10 generalBoxShadow bg-info d-flex justify-content-center flex-column align-items-center py-5 rounded-2 text-decoration-none text-dark">
            <FontAwesomeIcon icon={faCommentsDollar} className='fs-1 pb-3 fw-bolder' />
            <p className='fw-bolder fs-5'>Contact Marketer</p>
        </NavLink>
        <NavLink to='/contact_support' className="col-sm-3 col-10 generalBoxShadow bg-info d-flex justify-content-center flex-column align-items-center py-5 rounded-2 text-decoration-none text-dark">
            <FontAwesomeIcon icon={faHeadset} className='fs-1 pb-3 fw-bolder'  />
            <p className='fw-bolder fs-5'>Contact Support</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Contact
