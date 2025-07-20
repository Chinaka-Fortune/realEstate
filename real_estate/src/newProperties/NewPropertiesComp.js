import React from 'react'

const NewPropertiesComp = ({propertyPix, propertyText}) => {
  return (
    <div className='component-prop'>
      <img src={propertyPix} alt="" />
      <div className="content">
        <p>{propertyText}</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default NewPropertiesComp
