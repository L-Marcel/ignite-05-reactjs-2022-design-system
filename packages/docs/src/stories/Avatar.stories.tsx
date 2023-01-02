import { Avatar, AvatarProps } from '@lm-ignite/react-ignite-tokens'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://github.com/l-marcel.png',
    alt: 'Lucas Marcel Silva de Brito',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
