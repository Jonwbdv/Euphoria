import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store"

interface CounterSliceType {
    value: number
}

const initialState: CounterSliceType = {
    value: 0
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state){
            state.value = state.value + 1;
        },
        decrement(state){
            state.value = state.value - 1;
        },
        resetToValue(state, payload: PayloadAction<number>){
            state.value = 0;
        }
    }
})

export const getCounterValue = (state: RootState) => state.testCounter.value;

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer