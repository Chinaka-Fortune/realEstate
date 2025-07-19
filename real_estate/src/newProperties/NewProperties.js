import React from 'react'
import NewPropertiesComp from './NewPropertiesComp'
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg"
import "./newProperties.css"
import "../index.css"
const NewProperties = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-2">
            <NewPropertiesComp propertyPix ={propertyDev}/>
        </div>
      </div>
    </div>
  )
}

export default NewProperties
