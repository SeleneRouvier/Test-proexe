import axios from 'axios';

// constantes
const dataInitial = {
  Obj: []
}
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// reducer
export default function usersReducer(state = dataInitial, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, arrayUsers: action.payload }
    default:
      return state
  }
}

// actions
export const getUsersAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    console.log(error);
  }
}