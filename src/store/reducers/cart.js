import { actionTypes } from '../actions/cart';

const initialState = [];

export default function cart(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.AddItem:
            return state.some(item => item === payload.id)
                ? state
                : [...state, payload];
        case actionTypes.DeleteItem:
            return state.filter(item => item !== payload);
        default:
            return state;
    }
}
