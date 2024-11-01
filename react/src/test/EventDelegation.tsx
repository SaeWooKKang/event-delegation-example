import { useState } from "react";


export const EventDelegation = () => {
  const [count, setCount] = useState(0);
  const buttonCounts = Array(5000).fill(null).map((_, i) => i) 

  return (
    <>
      <h3>count:{count}</h3>

      <ul 
        onClick={(e) => {
          const target = e.target as HTMLElement
          const increaseCount = (target).getAttribute('data-increase')
          
          if (!increaseCount) {
            return 
          }
        
          setCount(prev => prev + (Number(increaseCount)))
        }}
      > 
        {
          buttonCounts.map(increaseCount => (
            <li key={increaseCount}>
              <button 
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
