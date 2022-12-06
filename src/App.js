import { useEffect, useState } from 'react';
import { Button, Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/displayBalance';
import MainHeader from './components/header';
import DisplayBalances from './components/displayBalances';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EntryLine from './components/entryLine';
import EntryLines from './components/entryLines';
import ModalEdit from './components/addNew/modalEdit';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [updated, setUpdated] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, entry } = useSelector((state) => state.modal);

    useEffect(() => {
      dispatch({ type:  'GET_ENTRIES' });
    }, [dispatch, updated]);

    const data = entries?.data

  return (
    <Container>

     <MainHeader title='The Budget Calculater App' />
     <DisplayBalance title='Your Balance:' value={total} size='small' />
     <Button onClick={() => navigate('/add')}>Add New</Button>
     <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

     <MainHeader title='History' type='h3' />
     <EntryLines entries={data} />

     <ModalEdit isOpen={isOpen} {...entry} />

    </Container>
  );
}

export default App;