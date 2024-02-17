import {configureStore} from '@reduxjs/toolkit'

import counter from '../features/counter/CounterSlice'



export const store = configureStore({
    reducer: {
        testCounter: counter
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

