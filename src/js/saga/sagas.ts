
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchFailed, fetchSucceeded } from "../actions/decidePartner";
import axios from 'axios';


// ワーカー Saga: FETCH_REQUESTED Action によって起動する
function* fetchNijiData() {
  try {
    const inputName = document.getElementById('inputName') as HTMLInputElement;
    const inputNameValue = inputName.value;
    const httpClient = axios.create({
      baseURL:'https://kadou.i.nijibox.net/api',
      withCredentials:true,
    });

    const result = yield call(() => {
      return httpClient.get('/who/search?query=' + inputNameValue)
    })

    console.log('result', result.data.data.item_list[0])
    
    // put()はActionをdispatchするメソッド
    yield put(fetchSucceeded(result.data.data.item_list[0]));

  } catch (e) {
    yield put(fetchFailed(e));
  }
}

/**
 * FETCH_REQUESTED Action が送出されるたびに fetchJsonDataを起動します。
 */
function* sagas() {
  yield takeEvery("FETCH_DATA", fetchNijiData);
}

export default sagas;
