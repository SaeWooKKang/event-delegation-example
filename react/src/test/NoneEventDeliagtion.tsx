import { useState } from "react";


export const NoneEventDelegation = () => {
  const [count, setCount] = useState(0);
  const buttonCounts = Array(5000).fill(null).map((_, i) => i) 
  
  return (
    <>
      <h3>{count}</h3>

      <ul> 
        {
          buttonCounts.map(increaseCount => (
            <li key={increaseCount}>
              <button 
                onClick={(e) => {
                  const value = Number(e.currentTarget.dataset.increase)

                  setCount(prev => prev + value)}
                }
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
