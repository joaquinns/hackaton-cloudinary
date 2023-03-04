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
