import React, { createContext, useCallback, useReducer, useState } from 'react'
import { initialValue, reducer } from '../reducers/editReducer'
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
  const [state, dispatch] = useReducer(reducer, initialValue)

  const handleReset = () => {
    dispatch({
      type: 'RESET',
      payload: {
        ...initialValue
      }
    })
  }

  const handleChangeSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked } = e.target as typeof e.target & {
        name: string
        value: string
      }
      console.log(name, value, checked)
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
      console.log(name, value)
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
