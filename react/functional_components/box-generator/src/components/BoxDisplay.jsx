import React from 'react';

const BoxDisplay = (props) => {
  return ( 
      <div className="flex flex-wrap gap-8 mt-8 w-7/12">
          { props.Boxes.map( item => 
              <div style={{ 
                backgroundColor: `${item.boxColor}`,
                height:`${item.sideLength}px`,
                width: `${item.sideLength}px` }}></div> ) }
      </div>
  ); 
};

export default BoxDisplay;