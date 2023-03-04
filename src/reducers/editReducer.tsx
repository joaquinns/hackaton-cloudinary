export interface EditFilters {
  w: string | null
  h: string | null
  blur: string
  quality: boolean
  brightness: string
  hue: string | number
  light: string
  saturation: string
  filter: string | null
  opacity: string
  secondary: string | null
}

export type ActionEditTypes =
  | {
      type: 'EDIT_HEIGHT'
      payload: EditFilters
    }
  | {
      type: 'RESET'
      payload: EditFilters
    }
  | {
      type: 'EDIT'
      name: string
      format?: string
      checked?: boolean
      value: string | boolean
    }

export const initialValue = {
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
  secondary: null
}

export function reducer(state: EditFilters, action: ActionEditTypes) {
  if (action.type === 'EDIT') {
    if (action.name === 'filter' || action.name === 'secondary') {
      return {
        ...state,
        [action.name]: action.value.toString().substring(1)
      }
    }

    if (action.name === 'quality') {
      return {
        ...state,
        [action.name]: action.checked ?? false
      }
    }
    return {
      ...state,
      [action.name]: action.value
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
      secondary: null
    }
  }

  throw new Error('Error in reducer, this action is not defined')
}
