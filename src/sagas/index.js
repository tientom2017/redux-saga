import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as Types from '../constants/task';
import { getListTask } from '../apis/task';
import { STATUS_CODE } from '../constants';
import { fetListTaskFalse, fetListTaskSuccess, filterTaskSuccess } from '../actions/task';
import { showLoadingGl, hideLoadingGl } from '../actions/ui';

function* watchFetchListTask() {
    while (true) {
        yield take(Types.FETCH_TASK);
        yield put(showLoadingGl());
        const res = yield call(getListTask);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetListTaskSuccess(data));
        } else {
            yield put(fetListTaskFalse(data));
        }
        yield delay(1000);
        yield put(hideLoadingGl());
    }
};

function* filterTaskSaga(payload) {
    yield delay(500);
    const { keyword } = payload.payload;
    const res = yield call(getListTask);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetListTaskSuccess(data));
    } else {
        yield put(fetListTaskFalse(data));
    }
    const listTask = yield select(state => state.task.listTask);
    const filterTask = listTask.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
    yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
    yield fork(watchFetchListTask);
    yield takeLatest(Types.FILTER_TAST, filterTaskSaga);
};

export default rootSaga;
