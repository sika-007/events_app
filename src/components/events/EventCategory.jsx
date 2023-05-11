import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EventCategory = ({ data }) => {
  return (
    <div className='cat_events'>
      <h1>Events in {data[0].city}</h1>
      <div className="content">
        {data.map((event) => (
          <Link className='card' key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200} /> 
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventCategory
