import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Home = ({ data }) => {
  return (
    <main>
      {data.map(event => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image priority width={300} height={200} src={event.image} alt={event.id} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  )
}

export default Home
