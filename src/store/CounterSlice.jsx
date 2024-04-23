import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

// * make sure your dispatch methods are as clean as possible their sole purpose should be just updating the state

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addcart: (state, action) => {
      const repeatobj = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (repeatobj) {
        repeatobj.qty++;
      } else {
        state.cartData.push(action.payload);
      }
    },

    removecart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment: (state, action) => {
      const itemToUpdate = state.cartData.find(
        (item) => item.id === action.payload.id
      );

      if (itemToUpdate) {
        itemToUpdate.qty++;
      }
    },

    decrement: (state, action) => {
      // * its better to not to do heavy calculations in dispatch methods

      const itemToUpdate = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      // * proxy data issues is due to immer libray to get a snapshot of user redux state use current method
      //* url : https://redux-toolkit.js.org/api/other-exports#current
      console.log(current(itemToUpdate)); // proxy data issue
      if (itemToUpdate) {
        if (itemToUpdate.qty <= 1) {
          itemToUpdate.qty = 1;
        } else {
          itemToUpdate.qty--;
        }
      }
    },
  },
});

export const { addcart, removecart, increment, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
