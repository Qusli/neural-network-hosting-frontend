export const enum EIconSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export interface IconProps {
  name: string,
  size: EIconSize.SM | EIconSize.MD | EIconSize.LG | EIconSize.XL
  scale: number
  color: string
}

export interface InputProps {
  validation?: () => boolean
  onInput?: (payload: InputEvent) => void
  onFocusIn?: (payload: FocusEvent) => void
  onFocusOut?: (payload: FocusEvent) => void
}
