import React, { useState } from 'react'
import { Button, Container } from 'semantic-ui-react'
import './App.css'
import DisplayBalance from './components/displayBalance.tsx'
import MainHeader from './components/header.tsx'
import DisplayBalances from './components/displayBalances.tsx'
import { useNavigate } from 'react-router-dom'
import EntryLines from './components/entryLines.tsx'
import Message from './components/message.tsx'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function App() {
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['GET_ENTRIES', {}],
    queryFn: async () => {
      const d = await axios.get('http://localhost:3001/entries')
      return d.data
    },
    initialData: [
      {
        id: 1,
        value: 1000,
        isExpense: false,
        description: 'Description',
      },
      {
        id: 2,
        value: 20,
        isExpense: true,
        description: 'Description',
      },
    ],
  }
  )

  const total = (data || []).reduce((pre, curr) => pre + curr.value, 0)
  
  let firstName: string = 'Peter'
  let Age: number = 90
  let subjects: Array<string> = ['English', 'Math']
  let marks: number[] = [50, 50]

  // tuple - several dataTypes
  let marks2: [string, number] = ['kenya', 50]
  //  enum
  // enum Name {school, color='green'}
  //any
  let tribe: any = 44
  //void - declare return type
  const question = (): string => {
    return 'vv'
  }

  interface balanceInitialState {
    readonly title: string;
    readonly size: string;
  }

  const [state] = useState<balanceInitialState>({ title: 'Your Balance:', size: 'small' });

  return (
    <Container>
      <h6 className="toast">
        <Message />
      </h6>

      <p>
        This is your score {firstName}
        Age: {Age}
        subjects: {subjects}
        marks; {marks}
      </p>

      <MainHeader title="The Budget Calculator App" />
      <DisplayBalance title={state.title} value={total} size={state.size} />

      <Button onClick={() => navigate('/add')}>Add New</Button>
      <DisplayBalances expenseTotal={0} incomeTotal={0} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={data} />
    </Container>
  )
}

export default App
