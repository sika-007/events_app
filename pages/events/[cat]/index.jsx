import React from 'react'

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
  console.log(data)

  return {
    props: { data }
  }
}

const EventsPerCity = ({ data }) => {

  console.log(data)

  return (
    <div>
      <h1>Events in London</h1>
      <a href="/events/london/event1">
        <img src="" alt="" />
        <h2>Event 1</h2>
      </a>
      <a href="/events/london/event2">
        <img src="" alt="" />
        <h2>Event 2</h2>
      </a>
      <a href="/events/london/event5">
        <img src="" alt="" />
        <h2>Event 3</h2>
      </a>
      <a href="/events/london/event3">
        <img src="" alt="" />
        <h2>Event 4</h2>
      </a>
      <a href="/events/london/event4">
        <img src="" alt="" />
        <h2>Event 5</h2>
      </a>
    </div>
  )
}

export default EventsPerCity
