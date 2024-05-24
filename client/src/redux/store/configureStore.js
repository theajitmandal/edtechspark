import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducerSlices/counterSlice'
import boxSlice from '../reducerSlices/boxSlice'
import logger from 'redux-logger'


const store = configureStore({
    reducer: {
        counter: counterSlice,
        box: boxSlice
    },
    
})

export default store