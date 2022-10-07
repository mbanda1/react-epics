import { call, takeEvery, put } from 'redux-saga/effects'
import Axios from 'axios'

// function uses axios to fetch data from our api
let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  })
}

export function* fetchNumberSaga() {
  try {
    let result = yield call(() =>
      callAPI({
        url: 'http://localhost:3001/values',
      })
    )
    // yield put('incrementByAmount'(result.data[0]))
    yield put({type:'increment', payload:{result} })
  } catch (e) {
    yield put({ type: 'NUMBER_SAGA_FAILED' })
  }
}
export default function* rootSaga() {
  yield takeEvery('FETCH_NUMBER_SAGA', fetchNumberSaga)
}