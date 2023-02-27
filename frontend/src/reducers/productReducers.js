import * as actionTypes from '../constants/productActionTypes';

export const productListReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return { products: [] };
        case actionTypes.PRODUCT_LIST_SUCCESS:
            return { products: payload };
        case actionTypes.PRODUCT_LIST_FAIL:
            return { error: payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.PRODUCT_DETAILS_REQUEST:
            return { product: {} };
        case actionTypes.PRODUCT_DETAILS_SUCCESS:
            return { product: payload };
        case actionTypes.PRODUCT_DETAILS_FAIL:
            return { error: payload };
        default:
            return state;
    }
};
