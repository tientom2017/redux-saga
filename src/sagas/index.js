import { fork, take, call, put, delay, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as Types from '../constants/task';
import { getListTask, addTask, editTask, delTask } from '../apis/task';
import { STATUS_CODE } from '../constants';
import { 
    fetListTaskFalse, 
    fetListTaskSuccess, 
    filterTaskSuccess,
    addTaskSuccess, 
    addTaskFalse,
    editTaskSuccess,
    editTaskFalse,
    delTaskSuccess,
    delTaskFalse
} from '../actions/task';
import { showLoadingGl, hideLoadingGl } from '../actions/ui';
import {hideModal} from '../actions/modal';

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

function* addTaskSaga({payload}) {
    yield put(showLoadingGl());
    const res = yield call(addTask, payload);
    const { status, data } = res;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
    } else {
        yield put(addTaskFalse(data));
    }
    yield delay(1000);
    yield put(hideLoadingGl());
    yield put(hideModal())
}

function* editTaskSaga({payload}) {
    yield put(showLoadingGl());
    const res = yield call(editTask, payload);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(editTaskSuccess(data));
    } else {
        yield put(editTaskFalse(data));
    }
    yield delay(500);
    yield put(hideModal());
    yield put(hideLoadingGl());
}

function* delTaskSaga({payload}) {
    yield put(showLoadingGl());
    const res = yield call(delTask, payload.id);
    const { status } = res;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(delTaskSuccess(payload.id));
    } else {
        yield put(delTaskFalse());
    }
    yield delay(500);
    yield put(hideLoadingGl());
}

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
    yield takeEvery(Types.ADD_TASK, addTaskSaga);
    yield takeEvery(Types.EDIT_TASK, editTaskSaga);
    yield takeEvery(Types.DEL_TASK, delTaskSaga);
};

export default rootSaga;
