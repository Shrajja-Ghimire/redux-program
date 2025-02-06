//components/myComponents.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataRequest,
  deleteDataRequest,
  createPostRequest,
  putPostRequest,
  patchPostRequest,
} from "../actions";

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);
  //delete
  const handleDeleteData = () => {
    dispatch(deleteDataRequest());
  };
  //create
  const handleCreateData = () => {
    const data = JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    });
    dispatch(createPostRequest(data));
  };
  //put
  const handleUpdateData = () => {
    const data = JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    });
    dispatch(putPostRequest(data));
  };
  //patch
  const handlePatchData = () => {
    const data = JSON.stringify({
      title: "foo",
    });
    dispatch(patchPostRequest(data));
  };
  return (
    <div className="app-container">
      <h1>Redux Saga App</h1>
      <div className="data-container">
        {data ? (
          <div className="data">{JSON.stringify(data)}</div>
        ) : (
          <div className="loading">
            {error ? `Error: ${error}` : "Loading data..."}
          </div>
        )}
      </div>
      <button
        className="fetch-button"
        onClick={() => dispatch(fetchDataRequest())}
      >
        Fetch Data
      </button>
      <button className="delete-button" onClick={handleDeleteData}>
        Delete Data
      </button>
      <button className="delete-button" onClick={handleCreateData}>
        Create Data
      </button>
      <button className="delete-button" onClick={handleUpdateData}>
        Update Data
      </button>
      <button className="delete-button" onClick={handlePatchData}>
        Patch Data
      </button>
    </div>
  );
};

export default MyComponent;
