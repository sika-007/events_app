import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'


const EventInfo = ({ pageItem }) => {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const email = inputEmail.current.value;
    const eventId = router?.query.id
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!validRegex.test(email) || !email) {
      setMessage('This is not a valid email address')
      console.log(message)
    } else {
      try {
        // POST fetch request
        // post the email and the event id
        const response = await fetch(`/api/email-registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            eventId
          })
        });
        const data = await response.json()
        inputEmail.current.value = ""
        setMessage(data.message);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
      } catch(err) {
        console.error(err)
      }
    }
    
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }


  return (
    <div className='event_info'>
      <Image className='image' src={pageItem.image} width={1000} height={300} alt={pageItem.title} />
      <h1>{pageItem.title}</h1>
      <p>{pageItem.description}</p>
      <form className='email-registration' onSubmit={handleSubmit}>
        <label className='input-and-btn'>
          Get registered for this event
          <input ref={inputEmail} id="email" type="text" placeholder='Please insert your email' /> <button type="submit">Submit</button>
        </label>
      </form>
      <p className="message">{message}</p>
    </div>
  )
}

export default EventInfo
