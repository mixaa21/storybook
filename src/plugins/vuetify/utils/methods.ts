import type { VuetifyLetterSpacings } from '../index'

import { default as letterSpacings } from './constants/letter-spacings'

export function generateThemeColorVariablesMap(
  name: string,
  color: VuetifyColor | string,
  textOnColor: VuetifyColor | string
) {
  const isVuetifyColor = typeof color === 'object'
  const isVuetifyTextOnColor = typeof textOnColor === 'object'
  return {
    [`theme-${name}`]: isVuetifyColor ? color.base : color,
    [`theme-${name}-lighten-5`]: isVuetifyColor ? color.lighten5 : color,
    [`theme-${name}-lighten-4`]: isVuetifyColor ? color.lighten4 : color,
    [`theme-${name}-lighten-3`]: isVuetifyColor ? color.lighten3 : color,
    [`theme-${name}-lighten-2`]: isVuetifyColor ? color.lighten2 : color,
    [`theme-${name}-lighten-1`]: isVuetifyColor ? color.lighten1 : color,
    [`theme-${name}-darken-1`]: isVuetifyColor ? color.darken1 : color,
    [`theme-${name}-darken-2`]: isVuetifyColor ? color.darken2 : color,
    [`theme-${name}-darken-3`]: isVuetifyColor ? color.darken3 : color,
    [`theme-${name}-darken-4`]: isVuetifyColor ? color.darken4 : color,
    [`theme-${name}-accent-1`]: isVuetifyColor ? color.accent1 : color,
    [`theme-${name}-accent-2`]: isVuetifyColor ? color.accent2 : color,
    [`theme-${name}-accent-3`]: isVuetifyColor ? color.accent3 : color,
    [`theme-${name}-accent-4`]: isVuetifyColor ? color.accent4 : color,
    [`theme-text-on-${name}`]: isVuetifyTextOnColor ? textOnColor.base : textOnColor,
    [`theme-text-on-${name}-lighten-5`]: isVuetifyTextOnColor ? textOnColor.lighten5 : textOnColor,
    [`theme-text-on-${name}-lighten-4`]: isVuetifyTextOnColor ? textOnColor.lighten4 : textOnColor,
    [`theme-text-on-${name}-lighten-3`]: isVuetifyTextOnColor ? textOnColor.lighten3 : textOnColor,
    [`theme-text-on-${name}-lighten-2`]: isVuetifyTextOnColor ? textOnColor.lighten2 : textOnColor,
    [`theme-text-on-${name}-lighten-1`]: isVuetifyTextOnColor ? textOnColor.lighten1 : textOnColor,
    [`theme-text-on-${name}-darken-1`]: isVuetifyTextOnColor ? textOnColor.darken1 : textOnColor,
    [`theme-text-on-${name}-darken-2`]: isVuetifyTextOnColor ? textOnColor.darken2 : textOnColor,
    [`theme-text-on-${name}-darken-3`]: isVuetifyTextOnColor ? textOnColor.darken3 : textOnColor,
    [`theme-text-on-${name}-darken-4`]: isVuetifyTextOnColor ? textOnColor.darken4 : textOnColor,
    [`theme-text-on-${name}-accent-1`]: isVuetifyTextOnColor ? textOnColor.accent1 : textOnColor,
    [`theme-text-on-${name}-accent-2`]: isVuetifyTextOnColor ? textOnColor.accent2 : textOnColor,
    [`theme-text-on-${name}-accent-3`]: isVuetifyTextOnColor ? textOnColor.accent3 : textOnColor,
    [`theme-text-on-${name}-accent-4`]: isVuetifyTextOnColor ? textOnColor.accent4 : textOnColor
  }
}

export function generateLetterSpacingsVariablesMap(type: VuetifyLetterSpacings) {
  return {
    ['theme-h1-letter-spacing']: letterSpacings[type].h1,
    ['theme-h2-letter-spacing']: letterSpacings[type].h2,
    ['theme-h3-letter-spacing']: letterSpacings[type].h3,
    ['theme-h4-letter-spacing']: letterSpacings[type].h4,
    ['theme-h5-letter-spacing']: letterSpacings[type].h5,
    ['theme-h6-letter-spacing']: letterSpacings[type].h6,
    ['theme-h7-letter-spacing']: letterSpacings[type].h7,
    ['theme-subtitle-1-letter-spacing']: letterSpacings[type].subtitle1,
    ['theme-subtitle-2-letter-spacing']: letterSpacings[type].subtitle2,
    ['theme-body-1-letter-spacing']: letterSpacings[type].body1,
    ['theme-body-2-letter-spacing']: letterSpacings[type].body2,
    ['theme-body-3-letter-spacing']: letterSpacings[type].body3,
    ['theme-button-letter-spacing']: letterSpacings[type].button,
    ['theme-caption-letter-spacing']: letterSpacings[type].caption,
    ['theme-overline-letter-spacing']: letterSpacings[type].overline
  }
}

export function generateLetterSpacingsBrowserVariablesMap(type: VuetifyLetterSpacings) {
  return {
    ['--v-theme-h1-letter-spacing']: letterSpacings[type].h1,
    ['--v-theme-h2-letter-spacing']: letterSpacings[type].h2,
    ['--v-theme-h3-letter-spacing']: letterSpacings[type].h3,
    ['--v-theme-h4-letter-spacing']: letterSpacings[type].h4,
    ['--v-theme-h5-letter-spacing']: letterSpacings[type].h5,
    ['--v-theme-h6-letter-spacing']: letterSpacings[type].h6,
    ['--v-theme-h7-letter-spacing']: letterSpacings[type].h7,
    ['--v-theme-subtitle-1-letter-spacing']: letterSpacings[type].subtitle1,
    ['--v-theme-subtitle-2-letter-spacing']: letterSpacings[type].subtitle2,
    ['--v-theme-body-1-letter-spacing']: letterSpacings[type].body1,
    ['--v-theme-body-2-letter-spacing']: letterSpacings[type].body2,
    ['--v-theme-body-3-letter-spacing']: letterSpacings[type].body3,
    ['--v-theme-button-letter-spacing']: letterSpacings[type].button,
    ['--v-theme-caption-letter-spacing']: letterSpacings[type].caption,
    ['--v-theme-overline-letter-spacing']: letterSpacings[type].overline
  }
}
