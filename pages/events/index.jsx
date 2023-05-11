import EventPage from "@/src/components/events/EventPage"

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
      <EventPage data={data} />
    </div>
  )
}

export default Events

