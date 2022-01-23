import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const UseEffectHookExample3 = () => {
  const [countDown, setCountDown] = useState(180)

  useEffect(()=>{
      const timeId = setInterval(() => {
          setCountDown(prevValue => prevValue - 1)
      }, 1000)

      return () => clearInterval(timeId)
  }, [])

  return (
    <div>
        <h1>{countDown}</h1>
    </div>
  );
};

export default UseEffectHookExample3;
