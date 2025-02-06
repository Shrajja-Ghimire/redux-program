// actions/index.js

//get
export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

//create
export const createPostRequest = () => ({
  type: "CREATE_POST_REQUEST",
});

export const createPostSuccess = (data) => ({
  type: "CREATE_POST_SUCCESS",
  payload: data,
});

export const createPostFailure = (error) => ({
  type: "CREATE_POST_FAILURE",
  payload: error,
});

//put
export const putPostRequest = (data) => ({
  type: "PUT_POST_REQUEST",
  payload: data,
});

export const putPostSuccess = (data) => ({
  type: "PUT_POST_SUCCESS",
  payload: data,
});

export const putPostFailure = (error) => ({
  type: "PUT_POST_FAILURE",
  payload: error,
});
//patch
export const patchPostRequest = (data) => ({
  type: "PATCH_POST_REQUEST",
  payload: data,
});

export const patchPostSuccess = (data) => ({
  type: "PATCH_POST_SUCCESS",
  payload: data,
});

export const patchPostFailure = (error) => ({
  type: "PATCH_POST_FAILURE",
  payload: error,
});

//delete
export const deleteDataRequest = () => ({
  type: "DELETE_DATA_REQUEST",
});
