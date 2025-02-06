// sagas/index.js
import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
// Simulate an API call
//get
const fetchDataFromAPI = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchData() {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put(actions.fetchDataSuccess(data));
  } catch (error) {
    yield put(actions.fetchDataFailure(error.message));
  }
}
//post
const createPost = async (data) => {
  console.log({ data }); // Log the incoming data for debugging
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log("response", response.data); // Log the response data for debugging
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error in createPost:", error);
    throw error; // Throw the error to be caught in the saga
  }
};
//put
const updateData = async (data) => {
  console.log(data);
  try {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      data,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//patch
const patchData = async (data) => {
  console.log(data);
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      data,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//create
function* createPostSaga(action) {
  try {
    const data = yield call(createPost, action.payload);

    console.log("response in saga", data);
    yield put(actions.createPostSuccess(data));
  } catch (error) {
    yield put(actions.createPostFailure(error.message));
  }
}
//put
function* updateDataSaga(action) {
  try {
    const data = yield call(updateData, action.payload);
    console.log(data);
    yield put(actions.putPostSuccess(data));
  } catch (error) {
    yield put(actions.createPostFailure(error.message));
  }
}
//patch
function* patchDataSaga(action) {
  try {
    const data = yield call(patchData, action.payload);
    console.log(data);
    yield put(actions.putPostSuccess(data));
  } catch (error) {
    yield put(actions.createPostFailure(error.message));
  }
}
export function* watchFetchData() {
  yield takeEvery("FETCH_DATA_REQUEST", fetchData);
  yield takeEvery("CREATE_POST_REQUEST", createPostSaga);
  yield takeEvery("PUT_POST_REQUEST", updateDataSaga);
  yield takeEvery("PATCH_POST_REQUEST", patchDataSaga);
}
