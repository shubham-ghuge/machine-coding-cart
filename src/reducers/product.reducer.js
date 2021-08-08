export const initialState = {
    data: [],
    loading: false,
    cartData: [],
}


export function DataReducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload }

        case "ADD_TO_CART":
            const updatedData = state.data.map((i) => {
                if (i.id === action.payload) {
                    i['isInCart'] = true;
                    i['quantity'] = 1;
                    return i
                }
                return i
            })
            return { ...state, data: updatedData, cartData: [...state.cartData, { id: action.payload, quantity: 1 }] }

        case "UPDATE_QUANTITY":
            const updatedProducts = state.data.map(i => {
                if (i.id === action.payload.id) {
                    if (i.quantity >= 1) {
                        i.quantity = action.payload.quantity;
                    } else {
                        i.isInCart = false;
                    }
                }
                return i;
            })
            return { ...state, data: updatedProducts }

        default:
            return { ...state }
    }
}