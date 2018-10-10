import axios from 'axios';

const initialState = {
  user: {},
};

const GET_USER = 'GET_USER';

const getUser = user => ({ type: GET_USER, user });

// export const login = formData => dispatch => {
//   return axios
//     .put('/auth/login', formData)
//     .then(res => res.data)
//     .then(user => dispatch(gotMe(user)))
//     .catch(err => console.log(err));
// };

export const auth = (name, email, password, method) => dispatch =>
  axios
    .post(`http://localhost:3000/auth/${method}`, { name, email, password })
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
