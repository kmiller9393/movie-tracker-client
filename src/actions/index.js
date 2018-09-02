export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const populateMovies = movies => {
  return {
    type: 'POPULATE_MOVIES',
    movies
  };
};

export const getUserInfo = (name, id) => {
  return {
    type: 'GET_USER_INFO',
    name,
    id
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const populateFavorites = favorites => {
  console.log(favorites)
  return {
    type: 'POPULATE_FAVORITES',
    favorites
  };
};

export const toggleFavorite = movie => {
  return {
    type: 'TOGGLE_FAVORITE',
    movie
  };
};
