import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

const initialState = {
    items: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "add_item": {
            const existingItem = state.items.find(
                (item) =>
                    item.product.id === action.payload.product.id &&
                    item.color === action.payload.color,
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.product.id === action.payload.product.id &&
                        item.color === action.payload.color
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }

        case "remove_item":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.product.id !== action.payload.id,
                ),
            };

        case "increase_item":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.product.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                ),
            };

        case "decrease_item":
            return {
                ...state,
                items: state.items
                    .map((item) =>
                        item.product.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item,
                    )
                    .filter((item) => item.quantity > 0),
            };

        case "clear_cart":
            return initialState;

        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
