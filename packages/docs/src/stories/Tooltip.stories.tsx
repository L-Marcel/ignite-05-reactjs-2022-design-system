import { Button, Tooltip, TooltipProps } from '@lm-ignite/react-ignite'
import type { StoryObj, Meta } from '@storybook/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    text: 'Adicionar item',
    children: (
      <>
        <Button size="icon">
          <Plus />
        </Button>
      </>
    ),
  },
} as Meta<TooltipProps>

export const Primary: StoryObj = {
  args: {},
}
