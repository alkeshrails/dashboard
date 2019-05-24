import React from 'react';
import MiddleSection from './MiddleSection';
import MiddleLeftSection from './MiddleLeftSection';
import MiddleRightSection from './MiddleRightSection';

function Middle() {
  return (
    <aside>
      <div className="row">
        <MiddleLeftSection />
        <MiddleSection />
        <MiddleRightSection /> 
      </div>
    </aside>
  );
}

export default Middle;
