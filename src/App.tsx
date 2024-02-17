import { useState } from 'react'
import { useAppDispatch } from './customHooks/Redux/TypedHooks'
import { useAppSelector } from './customHooks/Redux/TypedHooks'
import { getCounterValue } from './features/counter/CounterSlice'
import { increment, decrement } from './features/counter/CounterSlice'

import './App.css'



function App() {
  const dispatch = useAppDispatch()
  const counterState = useAppSelector(getCounterValue)


  return (
    <section className='font-bold'>
      <button className='mr-5' onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{counterState}</p>
    </section>
  )
}

export default App
