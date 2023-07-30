import { IProduct } from '@/server/modules/products/products.interface'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

export interface Component {
  category: string
  component: IProduct
}

export interface IComponents {
  components: Array<Component>
  totalPrice: number
}

const initialState: IComponents = {
  components: [],
  totalPrice: 0,
}

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addToComponentsList: (state, action: PayloadAction<IProduct>) => {
      state.components.push({ category: action.payload.category, component: action.payload })
      state.totalPrice += action.payload.price

      // const isSameComponent = state.components.find(
      //   comp => comp.category === action.payload.category && comp.component._id === action.payload._id
      // )
      // const isExist = state.components.find(comp => comp.category === action.payload.category)

      // if (isSameComponent) {
      //   toast.error('Component already exists!')
      // } else if (isExist) {
      //   state.totalPrice -= isExist.component.price
      //   state.totalPrice += action.payload.price
      //   const updatedList = state.components.map(comp => {
      //     if (comp.component._id === action.payload._id) {
      //       return { ...comp, component: action.payload }
      //     }
      //     return comp
      //   })
      //   state.components = updatedList
      //   toast.success('Component replaced!')
      // } else {
      //   toast.success('Component added!')
      //   state.components.push({ category: action.payload.category, component: action.payload })
      //   state.totalPrice += Number(action.payload.price)
      // }
    },

    removeFromComponentsList: (state, action: PayloadAction<IProduct>) => {
      const newVal = state.components.filter(({ component: { _id } }) => _id !== action.payload._id)
      state.components = newVal
      state.totalPrice -= action.payload.price
      toast.success('Removed component from the list!')
    },
  },
})

export const { addToComponentsList, removeFromComponentsList } = componentsSlice.actions

export default componentsSlice.reducer
