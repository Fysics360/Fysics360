import axios from 'axios'

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER'

const gotMe = (user) => ({
  type: GET_USER,
  user
})

export const login = (formData) => dispatch => {
  return axios.put('/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(err => console.log(err))
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default loginReducer;
