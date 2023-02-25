import * as ACTION_TYPES from '../constants/productActionTypes';

export const productListReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.PRODUCT_LIST_REQUEST:
            return { products: [] };
        case ACTION_TYPES.PRODUCT_LIST_SUCCESS:
            return { products: payload };
        case ACTION_TYPES.PRODUCT_LIST_FAIL:
            return { error: payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.PRODUCT_DETAILS_REQUEST:
            return { product: {} };
        case ACTION_TYPES.PRODUCT_DETAILS_SUCCESS:
            return { product: payload };
        case ACTION_TYPES.PRODUCT_DETAILS_FAIL:
            return { error: payload };
        default:
            return state;
    }
};
