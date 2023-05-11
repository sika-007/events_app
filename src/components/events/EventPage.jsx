import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const EventPage = ({ data }) => {
  return (
    <div className='events-page'>
        {data.map((event, index) => (
          <Link className='card' key={event.id + index} href={`/events/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200} /> 
            <div className="h2-text">
                <h2>{event.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default EventPage
