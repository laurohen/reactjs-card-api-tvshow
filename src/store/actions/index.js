import axios from "axios";
const url = process.env.REACT_APP_BASEURL;
const tvShow = process.env.REACT_APP_TV_SHOW;

export const getItemList = () => async (dispatch) => {
  await axios
    .get(`${url}search/shows?q=${tvShow}`)
    .then((response) => {
      dispatch({ type: "GET_ITEM_LIST", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "GET_ITEM_ERROR",
        payload: "ERROR 404 BRO",
      });
    });
};
