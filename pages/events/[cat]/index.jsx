import EventCategory from '@/src/components/events/EventCategory'

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
    <EventCategory data={data} />
  )
}

export default EventsPerCity
