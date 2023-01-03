import { Box, MultiStep, MultiStepProps } from '@lm-ignite/react-ignite'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            minWidth: '70vw',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Half: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
    size: 4,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
}
