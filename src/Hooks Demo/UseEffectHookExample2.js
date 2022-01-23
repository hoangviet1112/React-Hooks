import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const UseEffectHookExample2 = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
      const handleResize = () => {
          setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
  })
  
  return (
      <div>
        {width}
      </div>
  )
};

export default UseEffectHookExample2;
