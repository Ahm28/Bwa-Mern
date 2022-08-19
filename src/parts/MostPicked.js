import Button from 'elements/Button'
import React from 'react'

export default function MostPicked(props) {
  return (
    <section className='container' ref={props.refMostPicked}>
        <h4 className='mb-3'>Most Picked</h4>

        <div className='container-grid'>
            {props.data.map((item, index) => {
                return(
                    <div className={`item column-4 ${index == 0 ? 'row-2' : 'row-1'}`} key={`mostpicked-${index}`}>
                        <div className='card card-featured'>
                            <div className='tag'>${item.price} <span className='font-weight-light'>per {item.unit}</span></div>
                            <figure className='img-wrapper'>
                                <img className='img-cover' src={item.imageUrl}/>
                            </figure>
                            <div className='meta-wrapper'>
                                <Button type='link' href={`/properties/${item._id}`} className='stretched-link d-block text-white'>
                                    <h5>{item.name}</h5>
                                    <span>{item.city}, {item.country}</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
