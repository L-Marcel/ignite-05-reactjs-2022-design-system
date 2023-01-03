import { ComponentProps } from '@stitches/react'
import { styled } from '../styles/stitches.config'

import { fontSizes } from '@lm-ignite/ignite-tokens'
import { ElementType } from 'react'

type FontSizes = Record<string, { fontSize: string }>

const fontSizeOptions = Object.entries(fontSizes).reduce((prev, [key]) => {
  prev[key] = {
    fontSize: `$${key}`,
  }

  return prev
}, {} as FontSizes)

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  variants: {
    size: {
      ...fontSizeOptions,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
