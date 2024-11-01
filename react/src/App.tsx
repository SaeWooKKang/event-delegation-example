import { useState } from 'react'
import { EventDelegation } from './test/EventDelegation';
import { NoneEventDelegation } from './test/NoneEventDeliagtion';
import { NoneEventDelegationWithHandler } from './test/NoneEventDeliagtionWithHandler';


enum TestType {
  'EVENT_DELEGATION'= 'EVENT_DELEGATION' ,
  'NONE_EVENT_DELEGATION' = 'NONE_EVENT_DELEGATION', 
  'NONE_EVENT_DELEGATION_WITH_HANDLER' = 'NONE_EVENT_DELEGATION_WITH_HANDLER'
} 

function App() {
  const [testType, setTestType] = useState<TestType | null>(null)

  return (
    <>
      <h1>current Type: {testType}</h1>

      <button type='button' onClick={() => setTestType(TestType['EVENT_DELEGATION'])}>EVENT_DELEGATION</button>
      <button type='button' onClick={() => setTestType(TestType['NONE_EVENT_DELEGATION'])}>TestType['NONE_EVENT_DELEGATION']</button>
      <button type='button' onClick={() => setTestType(TestType['NONE_EVENT_DELEGATION_WITH_HANDLER'])}>TestType['NONE_EVENT_DELEGATION_WITH_HANDLER']</button>
      
      {testType === TestType['EVENT_DELEGATION'] && <EventDelegation />}
      {testType === TestType['NONE_EVENT_DELEGATION'] && <NoneEventDelegation />}
      {testType === TestType['NONE_EVENT_DELEGATION_WITH_HANDLER'] && <NoneEventDelegationWithHandler />}
    </>
  )
}

export default App
