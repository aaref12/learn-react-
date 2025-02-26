import {configureStore} from '@reduxjs/toolkit'
import todoreducer from '../feutures/TodoSlice'


export const store=configureStore({
reducer:todoreducer
})