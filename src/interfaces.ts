export interface INote {
  id: number | string
  title: string
  date: string
}

export type AlertType = 'warning' | 'success' | 'danger'

export interface IAlert {
  text?: string
  type?: AlertType
  visible?: boolean
}

export  interface IActionAlert {
  type: string
  payload?: IAlert | INote
}


export interface IAlertContext {
  alert : IAlert
  show: (text: string, type: AlertType) => void
  hide: () => void
}

export interface IFirebaseState {
  notes: Array<INote>
  loading: boolean
}

export interface IFirebaseContext {
  state: IFirebaseState,
  showLoader(): void
  fetchNotes(): void
  addNote(title: string): Promise<Object>
  removeNote(id: number): void
}
