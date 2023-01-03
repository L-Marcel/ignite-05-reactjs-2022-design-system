import { styled } from '@stitches/react'
import { keyframes } from '../../styles/stitches.config'

const slideLeft = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

const slideRight = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

export const ToastContainer = styled(
  'div',
  {
    backgroundColor: '$gray800',
    borderRadius: 6,
    borderColor: '$gray600',
    borderWidth: 1,
    width: 'fit-content',
    maxWidth: 300,
    position: 'fixed',
    boxShadow: '0px 10px 20px -15px black',
    padding: '$3 $5',
    display: 'flex',

    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: '$1',
      alignItems: 'start',

      h3: {
        marginTop: '0.15rem',
      },
    },

    button: {
      all: 'unset',
      backgroundColor: '$gray700',
      marginLeft: '$4',
      marginRight: '-$2',
      height: 'fit-content',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      padding: '$1',

      '&:hover': {
        backgroundColor: '$gray600',
        cursor: 'pointer',
      },

      svg: {
        fontSize: 18,
        color: '$white',
      },
    },
  },
  {
    variants: {
      origin: {
        topLeft: {
          top: '$8',
          left: '$8',
          animation: `${slideLeft} .5s ease-in-out`,
        },
        topRight: {
          top: '$8',
          right: '$8',
          animation: `${slideRight} .5s ease-in-out`,
        },
        bottomLeft: {
          bottom: '$8',
          left: '$8',
          animation: `${slideLeft} .5s ease-in-out`,
        },
        bottomRight: {
          bottom: '$8',
          right: '$8',
          animation: `${slideRight} .5s ease-in-out`,
        },
      },
    },
    defaultVariants: {
      origin: 'bottomRight',
    },
  },
)
