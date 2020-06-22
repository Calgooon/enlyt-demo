import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchBmiRecords() {
  const json = yield fetch('http://134.122.26.195/userBmis')
        .then(response => response.json(), );    
  yield put({ type: "BMI_RECORDS_RECEIVED", json: json });
}
function* actionWatcher() {
     yield takeLatest('GET_BMI_RECORDS', fetchBmiRecords)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}