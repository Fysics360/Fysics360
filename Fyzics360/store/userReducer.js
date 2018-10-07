import axios from 'axios'

//ACTION TYPES

const GET_USER = 'GET_USER'

//ACTION CREATOR

const GetUser = (user) => ({
  type: GET_USER,
  user
})

//THUNK CREATORS
const path = 'http://localhost:3000/api/users'
const retrieveUser = () => async dispatch => {
  try {
    const res = axios.get(path)
    const users = res.data
    dispatch(GetUser(users))
  } catch (error) {
    console.error(error)
  }
}

//INITIALSTATE
const Initial = {
  user: [],
  authorizing: false
}

//REDUCER
const userReducer = (state = Initial, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.authorizing,
        authorizing: true
      }
    default:
      return state
  }
}

export default userReducer;
