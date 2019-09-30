import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// Actions.js est une définition des actions possible. Par exemple, searchField prendra un paramètre
// Texte; et retournera un type et un payload qui est l'élement passé en paramètre.
