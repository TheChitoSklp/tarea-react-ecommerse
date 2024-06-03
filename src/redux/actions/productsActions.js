export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch("http://localhost:5000/api/store/collections");
      const data = await response.json();
      dispatch(fetchProductsSuccess(data.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.toString()));
    }
  };
};
