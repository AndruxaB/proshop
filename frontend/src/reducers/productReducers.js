import {
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productActionTypes';

export const productListReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_LIST_REQUEST:
            return { products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { products: payload };
        case PRODUCT_LIST_FAIL:
            return { error: payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_DETAILS_REQUEST:
            return { product: {} };
        case PRODUCT_DETAILS_SUCCESS:
            return { product: payload };
        case PRODUCT_DETAILS_FAIL:
            return { error: payload };
        default:
            return state;
    }
};
