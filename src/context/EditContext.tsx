import { createContext, useReducer } from 'react'

interface IEditContextProdiver {
  children: React.ReactNode
}

export interface EditFilters {
  w: string | null
  h: string | null
  blur: string | null
}

type ActionEditTypes =
  | {
      type: 'EDIT_WIDTH'
      payload: EditFilters
    }
  | {
      type: 'EDIT_HEIGHT'
      payload: EditFilters
    }
  | {
      type: 'EDIT_BLUR'
      payload: EditFilters
    }

function reducer(state: EditFilters, action: ActionEditTypes) {
  if (action.type === 'EDIT_WIDTH') {
    return {
      ...action.payload,
      w: action.payload.w
    }
  }
  if (action.type === 'EDIT_HEIGHT') {
    return {
      ...action.payload,
      h: action.payload.h
    }
  }
  if (action.type === 'EDIT_BLUR') {
    return {
      ...action.payload,
      blur: action.payload.blur
    }
  }

  throw new Error('error in reducer')
}

interface EditContext {
  state: EditFilters
  handleChangeSize: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const EditContext = createContext({} as EditContext)

export function EditContextProdiver({ children }: IEditContextProdiver) {
  const [state, dispatch] = useReducer(reducer, {
    w: null,
    h: null,
    blur: null
  })

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as typeof e.target & { name: string; value: string }
    if (target.name === 'w') {
      dispatch({
        type: 'EDIT_WIDTH',
        payload: { ...state, w: target.value }
      })
    }
    if (target.name === 'h') {
      dispatch({
        type: 'EDIT_HEIGHT',
        payload: { ...state, h: target.value }
      })
    }
  }

  const value = {
    state,
    handleChangeSize
  }
  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
