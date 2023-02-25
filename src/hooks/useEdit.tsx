import { useContext } from 'react'
import { EditContext } from '../context/EditContext'

export const useEdit = () => {
  const editContext = useContext(EditContext)
  return editContext
}
