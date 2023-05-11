import React from 'react'
import EventInfo from '@/src/components/events/EventInfo'
/* Pay attention to the way this page is named. It is so to specify that this is a dynamic page that can hold dynamic content */

export async function getStaticPaths() {

  const { all_events } = await import("/data/data.json")

  const slugs = all_events.map(event => (
    {
      params: {
        cat: event?.city,
        id: event?.id, // The name of the key of this object is dependent on the name of the dynamic page that has been specified
      }
    }
  ))

  return {
    paths: slugs,
    fallback: false
  }
}

export async function getStaticProps(context) {

  const { all_events } = await import("/data/data.json")
  const page = all_events.filter(item => item.id === context?.params?.id)
  console.log(page)
  const [pageItem] = page

  return {
    props: { pageItem }
  }
}

const EventPage = ({ pageItem }) => <EventInfo pageItem={pageItem} />

export default EventPage
