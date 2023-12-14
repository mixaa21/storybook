import type { VuetifyLetterSpacings } from '../../index'

const standard = {
  html: 'initial',
  h1: '-0.015625em',
  h2: '-0.0083333333em',
  h3: 'normal',
  h4: '0.0073529412em',
  h5: 'normal',
  h6: 'normal',
  h7: 'normal',
  subtitle1: '0.009375em',
  subtitle2: '0.0071428571em',
  body1: '0.03125em',
  body2: '0.0178571429em',
  body3: 'normal',
  button: '0',
  caption: '0.0333333333em',
  overline: '0.1666666667em'
}

const medium = {
  html: '2px',
  h1: '2px',
  h2: '2px',
  h3: '2px',
  h4: '2px',
  h5: '2px',
  h6: '2px',
  h7: '2px',
  subtitle1: '2px',
  subtitle2: '2px',
  body1: '2px',
  body2: '2px',
  body3: '2px',
  button: '2px',
  caption: '2px',
  overline: '2px'
}

const large = {
  html: '4px',
  h1: '4px',
  h2: '4px',
  h3: '4px',
  h4: '4px',
  h5: '4px',
  h6: '4px',
  h7: '4px',
  subtitle1: '4px',
  subtitle2: '4px',
  body1: '4px',
  body2: '4px',
  body3: '4px',
  button: '4px',
  caption: '4px',
  overline: '4px'
}
type LetterSpacingNames =
  | 'html'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button'
  | 'caption'
  | 'overline'

type LetterSpacing = Record<LetterSpacingNames, string>
type LetterSpacings = Record<VuetifyLetterSpacings, LetterSpacing>

const letterSpacings: LetterSpacings = {
  standard,
  medium,
  large
}
export default letterSpacings
