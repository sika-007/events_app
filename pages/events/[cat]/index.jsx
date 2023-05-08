import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticPaths() {

  const { events_categories } = await import("/data/data.json")

  const allPaths = events_categories.map(event => {
    return {
      params: {
        cat: event.id.toString(),
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context) {

  const { all_events } = await import("/data/data.json")
  const id = context?.params?.cat
  const data = all_events.filter(event => event.city === id)
  console.log(id)

  return {
    props: { data }
  }
}

const EventsPerCity = ({ data }) => {

  return (
    <div>
      <h1>Events in {data[0].city}</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200} /> 
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsPerCity
