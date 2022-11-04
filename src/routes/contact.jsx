import React from 'react';
import Footer from '../components/Footer';
import { Form } from "react-router-dom";

const contact = () => {
  return (
    <div className='mb-2 mx-4 '>

    <div className='flex flex-col content-center items-center h-[80vh] w-screen'>
      <div className=' mt-20 '>
        <h2 className='text-2xl font-bold mb-2'>Contact Me</h2>
        <p className='opacity-70'>Hi there, contact me to ask me about anything you have in mind.</p>
      <Form method="post" action="/events" className=''>
     <div className='sm:flex mt-4'>
       <span>
     <label className='block' for="name">First Name:</label>
      <input className='border-2 rounded-lg p-2 w-[95%]' type="text" id="name" name="user_name" placeholder='Enter your first name'/>
      </span>
      <span>
     <label className='block' for="name">Last Name:</label>
      <input className='border-2 rounded-lg p-2' type="text" id="name" name="user_name" placeholder='Enter your last name'/>
      </span>
     </div>
     <div>
       <label className='block ' htmlFor="email">Email</label>
       <input className='border-2 rounded-lg p-2 sm:w-full' type="email" id="email" name="email" placeholder='yourname@email.com'/>
     </div>
     <div>
       <label className='block' htmlFor="message">Message</label>
       <textarea className='border-2 w-full p-2 rounded-lg' id="story" name="story"
          rows="5" cols="33" placeholder="Send a message and I'll reply as soon as possible...">
       
       </textarea>
     </div>
     <div className='mb-4 mt-2' >
     <label class="container">
  <input type="checkbox" />
  <span className='opacity-60 '> You agree to provide your data to [name] who may contact you.</span>
  <span class="checkmark"></span>
        </label>
     </div>
      <button className='bg-blue-400 text-white w-40 mx-2 md:mx-0 md:w-full font-bold rounded p-2 ' type="submit">Send message</button>
    </Form>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default contact