import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {idName !== 'contact' && <SocialMedia />}
        <div className='app__wrapper app__flex'>
          <Component />

          {idName === 'contact' && (
            <div className='copyright'>
              <p className='p-text'>{`${new Date().getFullYear()} © Mohammed Mudassir`}</p>
              <p className='p-text'>All Rights Reserved</p>
            </div>
          )}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
