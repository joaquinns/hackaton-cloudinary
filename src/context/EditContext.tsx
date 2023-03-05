import React, { createContext, useCallback, useReducer, useState } from 'react'
import { editReducer, initialValue } from '../reducers/editReducer'
import { ActionEditTypes, EditFilters } from '../types'

interface IEditContextProdiver {
  children: React.ReactNode
}

interface EditContext {
  state: EditFilters
  handleChangeSize: (e: React.ChangeEvent<HTMLInputElement>) => void
  dispatch: React.Dispatch<ActionEditTypes>
  handleReset: () => void
}

export const EditContext = createContext({} as EditContext)

export function EditContextProdiver({ children }: IEditContextProdiver) {
  const [typingTimeout, setTypingTimeout] = useState(500)
  const [targetValue, setTargetValue] = useState('')
  const [state, dispatch] = useReducer(editReducer, initialValue)

  const handleReset = () => {
    dispatch({
      type: 'RESET'
    })
  }

  const handleChangeSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked } = e.target as typeof e.target & {
        name: string
        value: string
      }
      setTargetValue(value)
      clearTimeout(typingTimeout)
      const settingTimeout = setTimeout(() => {
        dispatch({
          type: 'EDIT',
          name,
          checked,
          value
        })
      }, 150)
      setTypingTimeout(settingTimeout)
    },
    []
  )

  const value = {
    state,
    dispatch,
    handleChangeSize,
    handleReset,
    targetValue
  }
  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
