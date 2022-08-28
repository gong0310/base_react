import React, { Fragment, useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (prevState, { type, data }) => {
  let newState = { ...prevState };
  switch (type) {
    case "add":
      newState.count += data;
      return newState;

    default:
      return prevState;
  }
};
function Parent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCount = () => {
    dispatch({
      type: "add",
      data: 2,
    });
  };

  return (
    <Fragment>
      <h2>usereducer</h2>
      {state.count}
      <button onClick={addCount}>addCount</button>
    </Fragment>
  );
}
export default Parent;
