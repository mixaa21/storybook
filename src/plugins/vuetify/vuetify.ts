import 'vuetify/styles'
import './styles.scss'
import './fonts.scss'

import type { VuetifyOptions } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiChevronDown, mdiCheckboxOutline } from '@mdi/js'

// Замена иконок VCheckBox и VSelect
aliases.dropdown = mdiChevronDown
aliases.checkboxOn = mdiCheckboxOutline

// eslint-disable-next-line import/no-unresolved
import colors from 'vuetify/lib/util/colors'

import { ru } from 'vuetify/locale'

import { createVuetify } from 'vuetify'

import { defaults, generateThemeColorVariablesMap, textOnColors, VuetifyThemes } from './utils'

export const shadowBlue = '#1B2F5B'
export const opacityBlue = '#A8D0FB'

const standardColors = {
  ...generateThemeColorVariablesMap('red', colors.red, textOnColors.red),
  ...generateThemeColorVariablesMap('pink', colors.pink, textOnColors.pink),
  ...generateThemeColorVariablesMap('purple', colors.purple, textOnColors.purple),
  ...generateThemeColorVariablesMap('deep-purple', colors.deepPurple, textOnColors.deepPurple),
  ...generateThemeColorVariablesMap('indigo', colors.indigo, textOnColors.indigo),
  ...generateThemeColorVariablesMap('blue', colors.blue, textOnColors.blue),
  ...generateThemeColorVariablesMap('light-blue', colors.lightBlue, textOnColors.lightBlue),
  ...generateThemeColorVariablesMap('cyan', colors.cyan, textOnColors.cyan),
  ...generateThemeColorVariablesMap('teal', colors.teal, textOnColors.teal),
  ...generateThemeColorVariablesMap('green', colors.green, textOnColors.green),
  ...generateThemeColorVariablesMap('light-green', colors.lightGreen, textOnColors.lightGreen),
  ...generateThemeColorVariablesMap('lime', colors.lime, textOnColors.lime),
  ...generateThemeColorVariablesMap('yellow', colors.yellow, textOnColors.yellow),
  ...generateThemeColorVariablesMap('amber', colors.amber, textOnColors.amber),
  ...generateThemeColorVariablesMap('orange', colors.orange, textOnColors.orange),
  ...generateThemeColorVariablesMap('deep-orange', colors.deepOrange, textOnColors.deepOrange),
  ...generateThemeColorVariablesMap('brown', colors.brown, textOnColors.brown),
  ...generateThemeColorVariablesMap('blue-grey', colors.blueGrey, textOnColors.blueGrey),
  ...generateThemeColorVariablesMap('grey', colors.grey, textOnColors.grey)
}

const themes = {
  light: {
    dark: false,
    variables: {
      'theme-border-color': colors.shades.black,
      'theme-border-opacity': 0.12,
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.8,

      ...standardColors
    },
    colors: {
      primary: '#3F7FBC',
      secondary: '#F4BE11',
      'on-secondary': colors.shades.white,
      tertiary: '#20B5B7',
      quaternary: '#9B59B6',
      quinary: '#E2E8F0',
      'on-quinary': '#3C3F45',
      error: '#CC4E42',
      success: '#3AAA3D',
      warning: '#F79939',
      'on-warning': colors.shades.white,
      vk: '#3972a9',

      background: '#e0e4e7',
      'on-background': '#3c3f45',
      'on-surface': '#3c3f45'
    }
  },
  dark: {
    dark: true,
    variables: {
      'theme-border-color': colors.shades.white,
      'theme-border-opacity': 1,
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.8,

      ...standardColors
    },
    colors: {
      primary: '#3F7FBC',
      secondary: '#F4BE11',
      'on-secondary': colors.shades.white,
      tertiary: '#20B5B7',
      quaternary: '#9B59B6',
      quinary: '#E2E8F0',
      error: '#CC4E42',
      success: '#3AAA3D',
      warning: '#F79939',
      'on-warning': colors.shades.white,
      vk: '#3972A9',

      'on-background': colors.shades.white,
      'on-surface': colors.shades.white
    }
  },
  'special-light': {
    variables: {
      'theme-border-color': colors.shades.black,
      'theme-border-opacity': 1,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 1,

      ...generateThemeColorVariablesMap('red', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('pink', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('purple', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('deep-purple', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('indigo', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('blue', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('light-blue', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('cyan', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('teal', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('green', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('light-green', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('lime', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('yellow', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('amber', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('orange', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('deep-orange', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('brown', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('blue-grey', colors.shades.black, colors.shades.white),
      ...generateThemeColorVariablesMap('grey', colors.shades.black, colors.shades.white)
    },
    dark: false,
    colors: {
      primary: colors.shades.black,
      'on-primary': colors.shades.white,
      secondary: colors.shades.black,
      'on-secondary': colors.shades.white,
      tertiary: colors.shades.black,
      'on-tertiary': colors.shades.white,
      quaternary: colors.shades.black,
      'on-quaternary': colors.shades.white,
      quinary: colors.shades.black,
      'on-quinary': colors.shades.white,
      error: colors.shades.black,
      'on-error': colors.shades.white,
      success: colors.shades.black,
      'on-success': colors.shades.white,
      warning: colors.shades.black,
      'on-warning': colors.shades.white,
      vk: colors.shades.black,
      'on-vk': colors.shades.white
    }
  },
  'special-dark': {
    variables: {
      'theme-border-color': colors.shades.white,
      'theme-border-opacity': 1,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 1,

      ...generateThemeColorVariablesMap('red', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('pink', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('purple', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('deep-purple', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('indigo', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('blue', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('light-blue', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('cyan', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('teal', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('green', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('light-green', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('lime', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('yellow', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('amber', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('orange', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('deep-orange', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('brown', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('blue-grey', colors.shades.white, colors.shades.black),
      ...generateThemeColorVariablesMap('grey', colors.shades.white, colors.shades.black)
    },
    dark: true,
    colors: {
      primary: colors.shades.white,
      'on-primary': colors.shades.black,
      secondary: colors.shades.white,
      'on-secondary': colors.shades.black,
      tertiary: colors.shades.white,
      'on-tertiary': colors.shades.black,
      quaternary: colors.shades.white,
      'on-quaternary': colors.shades.black,
      quinary: colors.shades.white,
      'on-quinary': colors.shades.black,
      error: colors.shades.white,
      'on-error': colors.shades.black,
      success: colors.shades.white,
      'on-success': colors.shades.black,
      warning: colors.shades.white,
      'on-warning': colors.shades.black,
      vk: colors.shades.white,
      'on-vk': colors.shades.black
    }
  },
  'special-blue': {
    variables: {
      'theme-border-color': colors.shades.black,
      'theme-border-opacity': 1,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 1,

      ...generateThemeColorVariablesMap('red', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('pink', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('purple', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('deep-purple', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('indigo', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('blue', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('light-blue', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('cyan', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('teal', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('green', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('light-green', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('lime', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('yellow', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('amber', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('orange', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('deep-orange', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('brown', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('blue-grey', shadowBlue, colors.shades.white),
      ...generateThemeColorVariablesMap('grey', shadowBlue, colors.shades.white)
    },
    dark: false,
    colors: {
      primary: shadowBlue,
      'on-primary': colors.shades.white,
      secondary: shadowBlue,
      'on-secondary': colors.shades.white,
      tertiary: shadowBlue,
      'on-tertiary': colors.shades.white,
      quaternary: shadowBlue,
      'on-quaternary': colors.shades.white,
      quinary: shadowBlue,
      'on-quinary': colors.shades.white,
      error: shadowBlue,
      'on-error': colors.shades.white,
      success: shadowBlue,
      'on-success': colors.shades.white,
      warning: shadowBlue,
      'on-warning': colors.shades.white,
      vk: shadowBlue,
      'on-vk': colors.shades.white,

      background: opacityBlue,
      'on-background': shadowBlue,
      surface: opacityBlue,
      'on-surface': shadowBlue
    }
  }
}

export const vuetifyOptions: VuetifyOptions = {
  defaults: defaults.common,
  theme: {
    defaultTheme: VuetifyThemes.Light,
    variations: {
      lighten: 5,
      darken: 4,
      colors: ['primary', 'secondary', 'tertiary', 'quaternary']
    },
    themes
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  locale: {
    locale: 'ru',
    messages: { ru }
  }
}

export default createVuetify(vuetifyOptions)
