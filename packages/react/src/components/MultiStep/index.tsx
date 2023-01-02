import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1, ...props }: MultiStepProps) {
  return (
    <MultiStepContainer {...props}>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: 4 }, (_, i) => i + 1).map((step) => {
          const isActived = currentStep >= step

          return <Step key={step} active={isActived} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'Text'
