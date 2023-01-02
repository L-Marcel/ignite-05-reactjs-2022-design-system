import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
} from '@lm-ignite/ignite-tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'
import { lineHeights } from '../../../tokens/src/line-heights'

export const {
  styled,
  createTheme,
  css,
  globalCss,
  getCssText,
  config,
  keyframes,
  theme,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
