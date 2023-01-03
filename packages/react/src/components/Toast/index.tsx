import { ToastContainer } from './styles'
import { X } from 'phosphor-react'
import { ReactNode, ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface ToastProps {
  title: string
  open: boolean
  onChangeOpen?: (open: boolean) => void
  description?: string
}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastContainer> {
  children: ReactNode
}

export function Toast({
  title,
  description,
  open = false,
  onChangeOpen,
  ...props
}: ToastProps) {
  function handleOnClose() {
    onChangeOpen && onChangeOpen(false)
  }

  if (!open) {
    return null
  }

  return (
    <ToastContainer {...props}>
      <main>
        <Heading size="md" as="h3">
          {title}
        </Heading>
        {!!description && <Text size="sm">{description}</Text>}
      </main>
      <button onClick={handleOnClose}>
        <X />
      </button>
    </ToastContainer>
  )
}
