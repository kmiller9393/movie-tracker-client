export const loginReducer = (state = {}, action) => {
  switch (action.type) {
  case 'LOGOUT_USER':
    return {};
  case 'GET_USER_INFO':
    return { name: action.name, id: action.id };
  default:
    return state;
  }
};
