import * as React from 'react';

export const Loading: React.FC = () => {

  return (
    // Any changes should be synced with index.html
    // 1. Change className= to class=
    // 2. Change '' to ""
    // 3. Change init-spinner-without-fadein to init-spinner-with-fadein
    // 4. Change strokeWidth to stroke-width
    <div className='init'>
      <div className='init-toolbar'></div>
      <div className='init-spinner-wrapper'>
        <div className='init-spinner init-spinner-without-fadein' role='progressbar'>
          <svg viewBox='22 22 44 44'>
            <circle className='init-spinner-svg-circle' cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6'></circle>
          </svg>
        </div>
      </div>
    </div>
    // Any changes should be synced with index.html
  );
};
