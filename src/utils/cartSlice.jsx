import { createSlice } from "@reduxjs/toolkit";

// Create a slice of state named "cart" using createSlice function
const cartSlice = createSlice({
  // Specify the name of the slice
  name: "cart",
  // Define the initial state of the cart slice
  initialState: {
    items: [],
  },
  // Define reducers to update the state based on actions
  reducers: {
    addItem: (state, action) => {
      // Push the payload (new item) into the items array in the state
      state.items.push(action.payload);
    },
    removeItem: (state,action) => {
      state.items.splice(action.payload,1)
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
