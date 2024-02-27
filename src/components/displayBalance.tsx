import React from 'react'
import { Statistic } from 'semantic-ui-react'

interface BalanceTypes {
  title: string,
  value: number,
  color?: any,
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge',
}

const DisplayBalance: React.FC<BalanceTypes> = ({ title, value = 0, color = 'black', size = 'tiny' }) => {

  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ texAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance
