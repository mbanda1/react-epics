import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './displayBalance.tsx'
import * as PropTypes from 'prop-types'

const DisplayBalances = (props: { expenseTotal: number, incomeTotal: number }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value={props.incomeTotal} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value={props.expenseTotal} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
