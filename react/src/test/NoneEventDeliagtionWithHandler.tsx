import {type MouseEventHandler, useState } from "react";


export const NoneEventDelegationWithHandler = () => {
  const [count, setCount] = useState(0);
  const buttonCounts = Array(5000).fill(null).map((_, i) => i) 

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = Number(e.currentTarget.dataset.increase)
    
    setCount(prev => prev + value)
  }

  return (
    <>
      <h3>{count}</h3>

      <ul> 
        {
          buttonCounts.map(increaseCount => (
            <li key={increaseCount}>
              <button 
                onClick={handleClick}
                type="button"
                data-increase={increaseCount}
              >
                +{increaseCount}
              </button>
            </li>
            )
          )
        }
      </ul>
    </>
  );
};
