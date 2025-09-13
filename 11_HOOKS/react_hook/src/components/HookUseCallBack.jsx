import { useCallback, useState } from 'react'
import List from './List'

const HookUseCallBack = () => {
  const [counter, setCounter] = useState(0)

  const getitemsFromDataBase = useCallback(() => {
    return ['a', 'b', 'c']
  }, [])

  return (
    <div>
      <h2>useCallBack</h2>
      <List getItems={getitemsFromDataBase} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}></button>
      <hr />
    </div>
  )
}

export default HookUseCallBack
