import { Box, BoxProps, Text } from '@lm-ignite/react-ignite-tokens'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}