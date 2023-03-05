import { ActionEditTypes, EditFilters } from '../types'

export const initialValue = {
  w: '',
  h: '',
  blur: '0',
  quality: false,
  brightness: '0',
  hue: 0,
  light: '0',
  saturation: '0',
  rounded: 0,
  filter: null,
  opacity: '100',
  secondary: null
}

export function editReducer(
  state: EditFilters,
  action: ActionEditTypes
): EditFilters {
  if (action.type === 'EDIT') {
    if (action.name === 'filter' || action.name === 'secondary') {
      return {
        ...state,
        [action.name]: action.value!.toString().substring(1)
      }
    }

    if (action.name === 'quality') {
      return {
        ...state,
        [action.name]: action.checked ?? false
      }
    }

    if (action.width && action.height) {
      return {
        ...state,
        h: action.height,
        w: action.width
      }
    }

    return {
      ...state,
      [action.name!]: action.value!
    }
  }

  if (action.type === 'RESET') {
    return {
      ...state,
      w: '',
      h: '',
      blur: '0',
      quality: false,
      brightness: '0',
      hue: 0,
      light: '0',
      saturation: '0',
      filter: null,
      opacity: '100',
      rounded: 0,
      secondary: null
    }
  }

  throw new Error('Error in reducer, this action is not defined')
}
