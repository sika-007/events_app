import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json")
  return {
    props: {
      data: events_categories,
    }
  }
}

const Events = ({ data }) => {
  
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((event, index) => (
          <Link key={event.id + index} href={`/events/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200} /> <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Events

