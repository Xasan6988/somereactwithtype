import React, {useReducer} from 'react';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';

import { AlertType, IAlertContext } from '../../interfaces';
import { HIDE_ALERT, SHOW_ALERT } from '../types';

const AlertState: React.FC = ({children}) => {

  const [state, dispatch] = useReducer(alertReducer, {visible: false})

  const show = (text: string, type: AlertType = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    })
  }

  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AlertContext.Provider value={{show, hide, alert: state} as IAlertContext}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState;
