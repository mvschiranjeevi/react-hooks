import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Use Reducer</h1>
      <button
        onClick={increment}
        style={{ marginRight: "10px", padding: "10px 20px" }}
      >
        +
      </button>
      <span style={{ fontSize: "20px", margin: "0 20px" }}>{state.count}</span>
      <button
        onClick={decrement}
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        -
      </button>
    </div>
  );
};

export default UseReduce;
