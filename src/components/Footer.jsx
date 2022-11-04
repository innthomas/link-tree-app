import React from 'react';
import zuri from '../assets/zuri.png';
import i4g from '../assets/I4G.png';

const Footer = () => {
  return (
    <footer className='sm:flex mt-20 justify-between '>
            <img src={zuri} alt="zuri" />
            <div className='opacity-50'>HNG Internship 9 Frontend Task</div>
            <img className='w-40' src={i4g} alt="i4g" />
       </footer>
  )
}

export default Footer