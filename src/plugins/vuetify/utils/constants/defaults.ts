import type { VuetifyOptions } from 'vuetify'

const special: VuetifyOptions['defaults'] = {
  VAppBar: {
    flat: true,
    border: true
  },
  VBtn: {
    rounded: 0,
    variant: 'flat',
    size: 'large',
    ripple: false
  },
  VCard: {
    rounded: 0,
    variant: 'outlined'
  },
  VTextField: {
    variant: 'outlined',
    color: 'grey lighten-4',
    singleLine: true,
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VTooltip: {
    openOnClick: true,
    scrollStrategy: 'none'
  },
  VMenu: {
    scrollStrategy: 'close'
  },
  VCombobox: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VSelect: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VAutocomplete: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VFileInput: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VTextarea: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCheckbox: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCheckboxBtn: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VSwitch: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VRadio: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VRadioGroup: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VImg: {
    width: 0
  }
}
const common: VuetifyOptions['defaults'] = {
  VBtn: {
    rounded: 0,
    variant: 'flat',
    size: 'large'
  },
  VMenu: {
    scrollStrategy: 'close'
  },
  VTooltip: {
    openOnClick: true,
    scrollStrategy: 'none'
  },
  VTextField: {
    variant: 'outlined',
    color: 'grey lighten-4',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCombobox: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VSelect: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VAutocomplete: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VFileInput: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VTextarea: {
    variant: 'outlined',
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCheckbox: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCheckboxBtn: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VSwitch: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VRadio: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VRadioGroup: {
    hideDetails: 'auto',
    density: 'comfortable'
  },
  VCard: {
    rounded: 0
  }
}

export default {
  special,
  common
}
