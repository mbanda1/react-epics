import React from 'react'
import { Container } from 'semantic-ui-react'
import * as PropTypes from 'prop-types'
import EntryLine from './entryLine'

function EntryLines({ entries = [] }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} />
      ))}
    </Container>
  )
}

EntryLines.propTypes = {
  entries: PropTypes.array,
}

export default EntryLines
