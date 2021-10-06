import React from 'react'
import {Box, Text, Stack} from '@sanity/ui'

class MyTool extends React.Component {
  render() {
    return (
      <Box padding={4} paddingY={5}>
        <Stack space={4}>
          <Text as="p">This is a blank slate for you to build on.</Text>
          <Text as="p">Tools are just React components!</Text>
        </Stack>
      </Box>
    )
  }
}

export default MyTool
