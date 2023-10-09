import React from 'react'
import * as PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const Msg = () => {
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return visible && <Message positive>Successfuly.</Message>
}

Msg.defaultProps = {
  head: null,
}

Msg.propTypes = {
  head: PropTypes.string.isRequired,
}

React.memo(Msg)
export default Msg
