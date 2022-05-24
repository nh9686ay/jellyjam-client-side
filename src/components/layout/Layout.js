import React from 'react'
import {
  Flex,
  Box, 
  Text
} from 'rebass'

function Layout() {
  return (
    <div>
    <Flex mx={-2}>
  <Box width={1/2} px={2} border={2}>
    <Text p={1} color='background' bg='primary'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2}>
    <Text p={1} color='background' bg='primary'>
      Half
    </Text>
  </Box>
</Flex>
</div>
  )
}

export default Layout