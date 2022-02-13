import { IFirebaseState } from "../../interfaces";
import { ADD_NOTE, FETCH_NOTES, SHOW_LOADER, REMOVE_NOTE } from "../types";

export const firebaseReducer = (state: IFirebaseState, action: any): IFirebaseState => {
  switch(action.type) {
    case ADD_NOTE:
      return {...state, notes: [...state.notes, action.payload]}
    case FETCH_NOTES:
      return {...state, notes: action.payload, loading: false}
    case REMOVE_NOTE:
      return {...state, notes: [...state.notes.filter(note => note.id !== action.payload )]}
    case SHOW_LOADER:
      return {...state, loading: true}
    default: return state
  }
}
