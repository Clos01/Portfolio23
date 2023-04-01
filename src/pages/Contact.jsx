import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

const Contact = () => {
  const [animateButton, setAnimateButton] = useState(false);

  const handleAnimationEnd = () => {
    setAnimateButton(true);
  };

  return (
    <div
      name='Contact'
      className='w-full h-screen flex justify-center items-center pt-30 sm:pt-0 p-35'
      style={{
        backgroundImage: 'linear-gradient(135deg, #2ab2ec, #038697)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form method='POST' action="https://getform.io/f/07c4747d-9e0c-4efa-8cf7-dfc955885eaa" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-900'>
          <Zoom>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-700'>Contact</p>
          </Zoom>
          <Fade left delay={200}>
            <p className='text-gray-00 py-4'> Submit the form below or shoot me an email - Cjrivas00@gmail.com</p>
          </Fade>
        </div>
        <Fade right delay={400}>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        </Fade>
        <Fade right delay={600}>
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        </Fade>
        <Fade right delay={800} onReveal={handleAnimationEnd}>
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        </Fade>
        {animateButton ? (
          <RubberBand>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
          </RubberBand>
        ) : (
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        )}
      </form>
    </div>
  )
}

export default Contact;
