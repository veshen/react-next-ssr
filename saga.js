/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { getIndexList } from './axios/index'
import { actionTypes, failure, loadDataSuccess, tickClock } from './actions'

es6promise.polyfill()

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function * loadDataSaga (data) {
  try {
    // const res = yield call(fetch, 'http://qa-admin.hxihuyu.com/bbs/bbsposts/getPostsListByIsHandpick?size=20&current=1&isHandpick=1');
    const res = yield call(getIndexList, data);
    // const data = yield res.json();
    yield put(loadDataSuccess(res))
  } catch (err) {
    yield put(failure(err))
  }
}
function* watchAndLog(getState) {
  while(true) {
    const action = yield take('*')
    console.log('action', action)
    // console.log('state after', getState())
  }
}
function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}

export default rootSaga
