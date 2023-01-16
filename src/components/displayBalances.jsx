import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './displayBalance'
import * as PropTypes from 'prop-types'

function DisplayBalances({ expenseTotal, incomeTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value={incomeTotal} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value={expenseTotal} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

DisplayBalances.defaultProps = {
  incomeTotal: 0,
  expenseTotal: 0,
}

DisplayBalances.propTypes = {
  expenseTotal: PropTypes.number,
  incomeTotal: PropTypes.number,
}

export default DisplayBalances
