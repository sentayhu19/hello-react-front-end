import { FETCHDATA, fetchdata } from './actions';

const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/v1/greetings').then((res) => {
    dispatch(fetchdata(res.data));
  }).catch(() => {
    // dispatch(fetchdataerror());
  });
};
const initState = {
  greetings: {},
  loading: true,
};
export const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHDATA:

      return {
        ...state,
        greetings: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getDataAPI;
