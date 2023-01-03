import { Toast, ToastProps } from '@lm-ignite/react-ignite'
import type { Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useEffect } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    origin: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    open: true,
    origin: 'bottomRight',
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary = ({ ...props }: ToastProps) => {
  const [, updateArgs] = useArgs()

  function handleChangeIsOpen(isOpen: boolean) {
    updateArgs({ open: isOpen })
  }

  return <Toast onChangeOpen={handleChangeIsOpen} {...props} />
}

export const WithoutDescription = ({ ...props }: ToastProps) => {
  const [, updateArgs] = useArgs()

  useEffect(() => {
    updateArgs({
      description: '',
    })
  }, [])

  function handleChangeIsOpen(isOpen: boolean) {
    updateArgs({ open: isOpen })
  }

  return <Toast onChangeOpen={handleChangeIsOpen} {...props} />
}
