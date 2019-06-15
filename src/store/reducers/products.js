import { actionTypes } from '../actions/products';

import { extractManufacturersFromProducts } from '../../utils/products';

const initialState = {
    data: [],
    manufacturers: ["All"],
    isLoading: false,
    isError: false
};

export default function products(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.InitLoading:
            return {
                data: [],
                manufacturers: ["All"],
                isLoading: true,
                isError: false
            };
        case actionTypes.DataLoaded:
            return {
                data: payload,
                manufacturers: ["All", ...extractManufacturersFromProducts(payload)],
                isLoading: false,
                isError: false
            };
        case actionTypes.DataFailure:
            return {
                data: [],
                manufacturers: ["All"],
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}
