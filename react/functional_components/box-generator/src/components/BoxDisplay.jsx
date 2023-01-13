import React from 'react';

const BoxDisplay = (props) => {
  return ( 
      <div style = {{ width:'33rem' }} className="flex flex-wrap gap-4 mt-8">
          { props.Boxes.map( item => 
              <div style={{ 
                backgroundColor: `${item.boxColor}`,
                height:`${item.sideLength}px`,
                width: `${item.sideLength}px` }}></div> ) }
      </div>
  ); 
};

export default BoxDisplay;