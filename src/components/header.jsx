import React from 'react'
import * as PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

function MainHeader({ title, type = 'h1' }) {
  return (
    <Header as={type} textAlign="center">
      {title}
    </Header>
  )
}
MainHeader.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
}

export default MainHeader
