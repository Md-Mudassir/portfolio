import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
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
);

export default SocialMedia;
