import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './entryLine.tsx'

const EntryLines = (props: { entries:Array<{ id: string, description: string, isExpense: boolean }> }) => {
  return (
    <Container>
      {props.entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} />
      ))}
    </Container>
  )
}

export default EntryLines
