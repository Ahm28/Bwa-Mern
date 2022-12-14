import Star from 'elements/Star'
import React from 'react';

import TestimoniAccent from 'assets/images/testimonial-landing-page-frame.jpg'
import Button from 'elements/Button';
import { Fade } from 'react-reveal';

export default function Testimoni({data}) {
  return (
    <Fade bottom>
      <section>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-auto' style={{marginRight: 70}}>
                <div className='testimonial-hero' style={{margin: '30px 0 0 30px'}}>
                  <img className='position-absolute' src={data.imageUrl} alt="Testimonial" style={{zIndex: 1}} />
                  <img className='position-absolute' src={TestimoniAccent} alt="Testimonial Frame" style={{margin: "-30px 0 0 -30px"}} />
                </div>
              </div>
              <div className='col'>
                <h4 style={{marginBottom: 40}}>{data.name}</h4>
                <Star value={data.rate} width={35} height={35} spacing={4}/>
                <h5 className='h2 font-weight-light line-height-2 my-3'> {data.content} </h5> 
                <span className='text-gray-500'>{data.familyName}, {data.familyOccupation}</span>
                <div>
                  <Button className='btn px-5' style={{marginTop: 40}} hasShadow isPrimary type='link' href={`/testimonial/${data._id}`}>Read Their Story</Button>

                </div>
              </div>
            </div>
          </div>
      </section>
    </Fade>
  )
}
