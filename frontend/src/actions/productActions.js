import axios from 'axios';
import * as helpers from '../helpers/helpers';
import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from '../constants/productActionTypes';

export const listProducts = async (dispatch, setIsLoading) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
        setIsLoading(false);
    }
};

export const listProductDetails = async (id, dispatch, setIsLoading) => {
    try {
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
        setIsLoading(false);
    }
};
