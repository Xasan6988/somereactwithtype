import React, {useContext, useEffect} from 'react';
import Form from '../components/Form';
import Loader from '../components/Loader';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Home: React.FC = () => {

  const {state, fetchNotes, removeNote} = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes()
  }, [])

  return(
    <>
      <Form/>

      <hr />

      {state.loading ? <Loader/> : null}

      <Notes notes={state.notes} onRemove={removeNote}/>
    </>
  )
}

export default Home;
