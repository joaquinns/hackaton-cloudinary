export interface EditFilters {
  w: string | number | null
  h: string | number | null
  blur: string
  quality: boolean
  brightness: string
  hue: string | number
  light: string
  saturation: string
  filter: string | null
  opacity: string
  rounded: string | number
  secondary: string | null
}

export type ActionEditTypes =
  | {
      type: 'RESET'
    }
  | {
      type: 'EDIT'
      name?: string
      checked?: boolean
      default_w?: string
      default_h?: string
      width?: string | number
      height?: string | number
      value?: string | boolean
    }
