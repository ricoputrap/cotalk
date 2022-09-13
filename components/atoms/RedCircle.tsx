import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const RedCircle: React.FC<Props> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={ children ? "24px" : "12px" }
      height={ children ? "24px" : "12px" }
      background="red"
      color="light"
      borderRadius="100%"
      fontSize="12px"
      fontWeight="bold"
    >
      { children }
    </Box>
  )
}

export default RedCircle