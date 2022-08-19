import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({value, height, width, spacing, clasName}) {
    const decimals = Number(value) % 1;
    
    const start = []
    let leftPos = 0

    for (let index = 0; index < 5 && index < value - decimals ; index++) {
        leftPos = leftPos + width
        start.push(
            <div className='star' key={`star-${index}`} style={{left: index*width, height: height, width: width, marginRight: spacing}}></div>
        )
        
    }

    if(decimals > 0 && value <= 5) start.push(
        <div className='star' key={`star`} style={{left: leftPos, height: height, width:  decimals * width - spacing}}></div>
    )

    const starPlaceholder = [] 

    for (let index = 0; index < 5 ; index++) {
        starPlaceholder.push(
            <div className='star placeholder' key={`star-placeholder-${index}`} style={{left: index*width, height: height, width: width, marginRight: spacing}}></div>
        )
        
    }


  return (
    <>
        <div className={['stars']} style={{height: height}}>
            {starPlaceholder}
            {start}
        </div>
    </>
  )
}

Star.propTypes = {
    clasName: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number
}
