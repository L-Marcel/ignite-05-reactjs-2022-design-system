import { Heading, HeadingProps } from '@lm-ignite/react-ignite'
import type { StoryObj, Meta } from '@storybook/react'
import { Box } from '../../../react/src/components/Box'

export default {
  title: 'Typography/Heading',
  component: Heading,
  options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
  control: {
    type: 'select',
  },
  args: {
    children: 'Lorem ipsum dolor.',
    size: 'md',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            maxWidth: '70vw',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
