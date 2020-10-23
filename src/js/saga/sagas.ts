
import { DecidePartnerActionTypes, FETCH_DATA } from '@js/types/SearchPartner/decidePartnerTypes'
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchFailed, fetchSucceeded } from "@js/actions/SearchPartner/decidePartner";
import axios from 'axios';


// ワーカー Saga: FETCH_REQUESTED Action によって起動する
function* fetchNijiData(action:DecidePartnerActionTypes) {
  try {

    // 入力された文字列
    const inputName = action.payload.inputName

    const httpClient = axios.create({
      baseURL:'https://kadou.i.nijibox.net/api',
      withCredentials:true,
    });

    // 入力された文字列から社員データを取得する
    const result = yield call(() => {
      return httpClient.get('/who/search?query=' + inputName)
    })

    // 社員APIから取得した社員データ
    const nijiData = result.data.data.item_list[0]

    console.log('入力された文字から取得した社員のデータ', nijiData)
    
    // put()はActionをdispatchするメソッド
    yield put(fetchSucceeded(inputName, nijiData));

  } catch (e) {
    yield put(fetchFailed());
  }
}

/**
 * FETCH_DATA Action が送出されるたびに fetchNijiDataを起動する
 */
function* sagas() {
  yield takeEvery(FETCH_DATA, fetchNijiData);
}

export default sagas;
