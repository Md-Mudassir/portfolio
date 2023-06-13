import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [danger, setDanger] = useState(false);

  const [emailError, setEmailError] = useState('');
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setDanger(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (formData.name === '' || formData.message === '' || formData.email === '') {
      setLoading(false);
      setDanger(true);
      return;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!formData.email.match(mailformat)) {
      setLoading(false);
      setEmailError('Email id is invalid');
      setDanger(true);
      return;
    }

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

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
      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              name='name'
              type='text'
              placeholder='Your name'
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className='app__flex'>
            <input
              className={`${danger ? 'danger' : 'p-text'}`}
              name='email'
              type='email'
              placeholder='Your email'
              value={email}
              onChange={handleChangeInput}
              required
            />
            {emailError && danger && (
              <div className='app__flex'>
                <p className='text-danger'>{emailError}</p>
              </div>
            )}
          </div>
          <div>
            <textarea
              name='message'
              value={message}
              onChange={handleChangeInput}
              placeholder='Your Message'
              className='p-text'
              required
            />
          </div>

          <button type='submit' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <h3 className='thankyou'>Thank you for getting in touch</h3>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
