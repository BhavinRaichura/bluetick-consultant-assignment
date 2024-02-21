import React from 'react'
import ContactForm from './utils/ContactForm'
import Headline from './utils/Headline'

const Contact = () => {
  return (
    <div id='contact' className=''>
        <Headline ><span className='  text-blue-700'>{"Let's Connect"}</span></Headline>
        <ContactForm />
    </div>
  )
}

export default Contact