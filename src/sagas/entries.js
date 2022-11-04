import { call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';

export default function* getAllEntries() {
    yield take('GET_ENTRIES');
    console.log('I need to get the entries now');

    const data = yield call(axios, 'http://localhost:3001/entries');

    yield put({ type: 'POPULATE_ENTRIES', payload: data });
  }
  