import { styled } from '@stitches/react'

export const TooltipContainer = styled('div', {
  positon: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .tooltip': {
    position: 'absolute',
    backgroundColor: '$gray900',
    borderRadius: '$xs',
    color: '$gray100',
    padding: '$3 $4',
    transform: 'translateY(calc(-100% - 3px))',
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    pointerEvents: 'none',

    '&:after': {
      content: '',
      position: 'absolute',
      bottom: -10,
      display: 'flex',
      borderColor: 'red',
      borderTop: '14px $gray900 solid',
      borderLeft: '14px transparent solid',
      borderRight: '14px transparent solid',
      borderBottom: '0px transparent solid',
    },
  },

  '&:hover .tooltip': {
    display: 'flex',
    pointerEvents: 'auto',
  },
})
