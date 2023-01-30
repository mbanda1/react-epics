import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import './App.css'
import DisplayBalance from './components/displayBalance'
import MainHeader from './components/header'
import DisplayBalances from './components/displayBalances'
import { useNavigate } from 'react-router-dom'
import EntryLines from './components/entryLines'
import Message from './components/message'
import { useQuery } from 'react-query'
import axios from 'axios'

function App() {
  const navigate = useNavigate()

  const { data } = useQuery(
    ['GET_ENTRIES', {}],
    async () => {
      const d = await axios.get('http://localhost:3001/entries')
      return d.data
    },
    {
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
      initialStale: true, // this allows us to update the intialData the moment loading is complete
    },
  )

  const total = (data || []).reduce((pre, curr) => pre + curr.value, 0)

  return (
    <Container>
      <h6 className="toast">
        <Message />
      </h6>

      <MainHeader title="The Budget Calculater App" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <Button onClick={() => navigate('/add')}>Add New</Button>
      <DisplayBalances expenseTotal={0} incomeTotal={0} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={data} />
    </Container>
  )
}

export default App
