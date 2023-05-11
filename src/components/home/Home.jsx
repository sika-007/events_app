import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Home = ({ data }) => {
  return (
    <div className="home-card">
      {data.map(event => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <div className="home-images">
            <Image priority width={300} height={200} src={event.image} alt={event.id} />
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home
