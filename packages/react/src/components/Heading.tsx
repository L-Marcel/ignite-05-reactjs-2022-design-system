import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

import { headingFontSizes } from '@lm-ignite/ignite-tokens'
import { ElementType } from 'react'

type FontSizes = Record<string, { fontSize: string }>

const fontSizeOptions = Object.entries(headingFontSizes).reduce(
  (prev, [key]) => {
    prev[key] = {
      fontSize: `$${key}`,
    }

    return prev
  },
  {} as FontSizes,
)

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
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

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
