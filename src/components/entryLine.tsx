import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const EntryLine = (props: { id: string, description: string, isExpense: boolean }) => {
  const { isExpense = false } = props

  const removeEntryById = useQuery({
    queryKey: ['GET_ENTRIES'],
    queryFn:     () => {}
  })

  return (
    <Fragment>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {props.description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {props.id}
            </Grid.Column>
            <Grid.Column width={3}>
              <Link to={`/${props.id}`}>
                <Icon name="edit" bordered />
              </Link>
              <Icon name="trash" bordered onClick={() => removeEntryById()} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine
