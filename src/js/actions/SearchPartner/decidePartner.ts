import { userInfo } from '../../types/commonTypes'
import { DecidePartnerActionTypes, FETCH_DATA, FETCH_SUCCEEDED, FETCH_FAILED} from '../../types/SearchPartner/decidePartnerTypes'


// 社員データを取得しにいく
export const fetchData = (inputName:string):DecidePartnerActionTypes => ({

  type: FETCH_DATA,
  payload: {
    inputName
  }

});


// 社員データ取得のプロセスが成功した場合（データの有無は未関係）
export const fetchSucceeded = (inputName:string, nijiData:userInfo):DecidePartnerActionTypes => ({

  type: FETCH_SUCCEEDED,
  payload: {
    inputName,
    nijiData,
  }

});


// 社員データ取得のプロセスが失敗した場合
export const fetchFailed = () => ({
  type: FETCH_FAILED,
});
