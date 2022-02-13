import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form: React.FC = () => {

  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim())
      .then(res => {
        alert.show('Заметка была создана', 'success');
        setValue('');
      })
      .catch(res => alert.show(`Произощла ошибка при добавлении: ${res}`, 'danger'));
    } else {
      alert.show('Введите назввание заметки', 'warning')
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className='form-control'
          placeholder='Введите заметку'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  )
};

export default Form;
