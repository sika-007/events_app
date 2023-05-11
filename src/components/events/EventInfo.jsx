import Image from 'next/image'


const EventInfo = ({ pageItem }) => {

  function handleSubmit() {

  }

  return (
    <div className='event_info'>
      <Image className='image' src={pageItem.image} width={1000} height={300} alt={pageItem.title} />
      <h1>{pageItem.title}</h1>
      <p>{pageItem.description}</p>
      <form className='email-registration' onSubmit={handleSubmit}>
        <label className='input-and-btn'>
          Get registered for this event
          <input id="email" type="email" placeholder='Please insert your email' /> <button type="button">Submit</button>
        </label>
      </form>
    </div>
  )
}

export default EventInfo
