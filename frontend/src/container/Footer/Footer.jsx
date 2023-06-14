import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Let's Connect</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' loading='lazy' />
          <a href='mailto:mdmudassirpro@gmail.com' className='p-text'>
            mdmudassirpro@gmail.com
          </a>
        </div>
      </div>
      <div className='app__footer-social'>
        <a href='https://www.linkedin.com/in/md-mudassir/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/md-mudassir' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <a href='https://www.instagram.com/md.mudassir7/' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
