import Image from 'next/image'


const EventInfo = ({ pageItem }) => {
  return (
    <div className='event_info'>
      <Image className='image' src={pageItem.image} width={1000} height={300} alt={pageItem.title} />
      <h1>{pageItem.title}</h1>
      <p>{pageItem.description}</p>
      <input type="email" /> <button>Submit</button>
    </div>
  )
}

export default EventInfo
