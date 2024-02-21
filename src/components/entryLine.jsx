import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import * as PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
function EntryLine({ id, description, isExpense = false }) {
  const removeEntryById = useQuery({
    queryKey: ['GET_ENTRIES'],
    queryFn:     () => {
      // action to remove
    }
  })

  return (
    <Fragment>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {id}
            </Grid.Column>
            <Grid.Column width={3}>
              <Link to={`/${id}`}>
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

EntryLine.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  isExpense: PropTypes.string,
}

export default EntryLine
