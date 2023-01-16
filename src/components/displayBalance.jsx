import React from 'react'
import * as PropTypes from 'prop-types'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({ title, value, color = 'black', size = 'tiny' }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ texAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  )
}

DisplayBalance.defaultProps = {
  value: 0,
}

DisplayBalance.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default DisplayBalance
