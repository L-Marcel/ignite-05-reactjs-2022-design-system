import { ReactNode, ComponentProps } from 'react'
import { TooltipContainer } from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
  text: string
}

export function Tooltip({ children, text, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <Text as="span" size="sm" className="tooltip">
        {text}
      </Text>
      {children}
    </TooltipContainer>
  )
}
