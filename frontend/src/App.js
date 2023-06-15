import React, { Suspense, lazy } from 'react';
// import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const About = lazy(() => import('./container/About/About'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const Header = lazy(() => import('./container/Header/Header'));
const Skills = lazy(() => import('./container/Skills/Skills'));
const Testimonial = lazy(() => import('./container/Testimonial/Testimonial'));
const Work = lazy(() => import('./container/Work/Work'));

const App = () => (
  <div className='app'>
    <Navbar />
    <Suspense
      fallback={
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>....</h1>
      }
    >
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </Suspense>
  </div>
);

export default App;
