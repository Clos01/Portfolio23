import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const [animateButton, setAnimateButton] = useState(false);
  const controls = useAnimation();

  const handleAnimationEnd = () => {
    setAnimateButton(true);
    controls.start({ scale: 1.2, transition: { duration: 0.3, yoyo: Infinity } });
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
          <motion.p
            className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-700'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>
          <motion.p
            className='text-gray-00 py-4'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Submit the form below or shoot me an email - Cjrivas00@gmail.com
          </motion.p>
        </div>
        <motion.input
          className='bg-[#ccd6f6] p-2'
          type="text"
          placeholder='Name'
          name='name'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.input
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder='Email'
          name='email'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        <motion.textarea
          className='bg-[#ccd6f6] p-2'
          name="message"
          rows="10"
          placeholder='Message'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onAnimationComplete={handleAnimationEnd}
        ></motion.textarea>
        {animateButton ? (
          <motion.button
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
            animate={controls}
          >
            Contact Me
          </motion.button>
        ) : (
          <button className='text-white       border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
          )}
        </form>
      </div>
      )
    }
    
    export default Contact;
