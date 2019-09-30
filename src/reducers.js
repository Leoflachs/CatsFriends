import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: ""
};
// Tout d'abord on définis l'état initial de notre app

export const searchCats = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // on retourne un new state, qui contiendra notre state + on va updater ce qui était
    // présents dans SearchField
    // return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
// on crée dans le reducer une fonction searchCats, cette fonction prend en paramètre
// un state et une action, on setup par default pour éviter les erreurs
