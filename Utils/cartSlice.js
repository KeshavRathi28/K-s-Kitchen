import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const ix = state.items.findIndex(obj => obj.id === action.payload.id);
            if (ix >= 0) {
                state.items[ix].itemQuantity += 1;
            } else {
                let newObj = { ...action.payload };
                newObj.itemQuantity = 1;
                state.items.push(newObj);
            }
        },
        removeItem: (state, action) => {
            const ix = state.items.findIndex(obj => obj.id === action.payload);
            if (state.items[ix].itemQuantity > 1) {
                state.items[ix].itemQuantity -= 1;
            } else {
                state.items.splice(ix, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;