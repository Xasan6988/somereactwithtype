import { IAlert } from "../../interfaces"
import { IActionAlert } from "../../interfaces"
import { SHOW_ALERT, HIDE_ALERT } from "../types"


export const alertReducer = (state: IAlert, action: IActionAlert): IAlert => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, ...action.payload, visible: true}
    case HIDE_ALERT:
      return {...state, visible: false}
    default: return state
  }
}
