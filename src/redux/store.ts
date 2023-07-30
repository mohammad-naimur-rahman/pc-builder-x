import { configureStore } from '@reduxjs/toolkit'
import componentsSlice from './features/componentsSlice'

const store = configureStore({
  reducer: {
    components: componentsSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
