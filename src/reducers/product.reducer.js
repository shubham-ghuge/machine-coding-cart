export const initialState = {
    data: [],
    loading: false,
    cartData: [],
    wishlistData: []
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
            return { ...state, data: updatedData, cartData: [...state.cartData, action.payload] }

        case "TOGGLE_WISHLIST":
            const { id, status } = action.payload
            const newData = state.data.map((i) => {
                if (i.id === id) {
                    if (status) {
                        i['isInBag'] = true;
                    } else {
                        delete i['isInBag']
                    }
                }
                return i
            })
            return { ...state, data: newData, wishlistData: status ? [...state.wishlistData, id] : state.wishlistData.filter(i => i !== id) }

        case "UPDATE_QUANTITY":
            const updatedProducts = state.data.map(i => {
                if (i.id === action.payload.id) {
                    if (action.payload.quantity) {
                        i.quantity = action.payload.quantity;
                    } else {
                        i.isInCart = false;
                    }
                }
                return i;
            })
            const updatedCartData = state.data.map((i) => i.isInCart && i.id).filter(j => j)
            return { ...state, data: updatedProducts, cartData: updatedCartData }

        default:
            return { ...state }
    }
}