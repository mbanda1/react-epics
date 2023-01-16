import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Container } from 'semantic-ui-react'
import './App.css'
import DisplayBalance from './components/displayBalance'
import MainHeader from './components/header'
import DisplayBalances from './components/displayBalances'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EntryLines from './components/entryLines'
import ModalEdit from './components/addNew/modalEdit'
import Message from './components/message'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [updated, setUpdated] = useState()
  const [notification, setNotification] = useState(null)

  const { data } = useSelector((state) => state.entries)
  const { isOpen, entry } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch({ type: 'GET_ENTRIES' })
  }, [dispatch, updated])

  const total = (data || []).reduce((pre, curr) => pre + curr.value, 0)

  return (
    <Container>
      <h6 className="toast">
        <Message head={notification} />{' '}
      </h6>

      <MainHeader title="The Budget Calculater App" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <Button onClick={() => navigate('/add')}>Add New</Button>
      <DisplayBalances expenseTotal={0} incomeTotal={0} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={data} />

      <ModalEdit
        isOpen={isOpen}
        setNotification={setNotification}
        setUpdated={setUpdated}
        {...entry}
      />
    </Container>
  )
}

export default App
