import ProductsService from '../../services/shop.service';

export const actionTypes = {
    InitLoading: 'INIT_LOADING',
    DataLoaded: 'DATA_LOADED',
    DataFailure: 'DATA_FAILURE'
}

const products = {
    initLoading: () => ({ type: actionTypes.InitLoading }),
    dataLoaded: (data) => ({ type: actionTypes.DataLoaded, payload: data }),
    dataFailure: () => ({ type: actionTypes.DataFailure }),
    loadData: () => async (dispatch) => {
        dispatch(products.initLoading());
        try {
            const data = await ProductsService.getProducts();
            dispatch(products.dataLoaded(data));
        } catch (e) {
            console.error(e);
            dispatch(products.dataFailure());
        }
    }
}

export default products;
