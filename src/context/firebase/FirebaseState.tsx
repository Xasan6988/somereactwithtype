import React, {useReducer} from 'react';

import axios from 'axios';

import { IFirebaseState, INote, IFirebaseContext } from '../../interfaces';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { ADD_NOTE, REMOVE_NOTE, SHOW_LOADER, FETCH_NOTES } from '../types';

const url = 'https://react-with-type-default-rtdb.europe-west1.firebasedatabase.app';

const FirebaseState: React.FC = ({children}) => {

  const initialState: IFirebaseState = {
    notes: [],
    loading: false
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    dispatch({type: FETCH_NOTES, payload})
  };

  const addNote = async (title: string) => {
    const note: Partial<INote> = {
      title,
      date: new Date().toJSON()
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      if (res.status === 200 || res.status === 201) {
        const n = {...note, id: res.data.name};
        console.log(n);
        dispatch({type: ADD_NOTE, payload: n as INote});

        return res;
      } else throw new Error(res.data.message);
    } catch (e: any) {
      throw new Error(e.message);
    }

  };

  const removeNote = async (id: number | string) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({type: REMOVE_NOTE, payload: id})
  };

  return (
    <FirebaseContext.Provider value={{
      state, showLoader, fetchNotes, addNote, removeNote
      } as IFirebaseContext} >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState
