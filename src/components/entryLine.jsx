import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
function EntryLine({ id, description, value, isExpense = false }) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name='edit'
                bordered
                onClick={() => dispatch({type: 'OPEN_EDIT_MODAL', payload: {
                  id, description, value, isExpense
                } })}
              />
              <Icon
                name='trash'
                bordered
                onClick={() => dispatch({type: 'REMOVE_ENTRY_RESULT', payload: id })}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default EntryLine;