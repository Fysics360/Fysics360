import axios from 'axios';

const initialState = {
  user: {},
};

const GET_USER = 'GET_USER';

const getUser = user => ({ type: GET_USER, user });

const path = `http://localhost:3000/auth`;

export const login = formData => async dispatch => {
  try {
    const res = await axios.post(`${path}/login`, formData);
    const data = res.data;
    dispatch(getUser(data));
    console.log('In the loggin store', data);
  } catch (error) {
    console.log(error);
  }
};

export const auth = (name, email, password, method) => dispatch =>
  axios
    .post(`${path}/${method}`, { name, email, password })
    .then(
      res => {
        dispatch(getUser(res.data));
        // history.push('/home');
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default loginReducer;
