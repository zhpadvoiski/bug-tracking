import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import "./styles.css";

let lastId = 0;
const slice = createSlice({
  name: "myredux",
  initialState: [],
  reducers: {
    addBug: (state, action) => {
      state.push({ id: lastId, ...action.payload });
    },
    removeBug: (state, action) => {
      state = state.filter((st) => st.id !== action.payload.id);
      return state;
    }
  }
});
const slice2 = createSlice({
  name: "myredux2",
  initialState: [],
  reducers: {
    addBug: (state, action) => {
      state.push({ id: lastId, ...action.payload });
    },
    removeBug: (state, action) => {
      state = state.filter((st) => st.id !== action.payload.id);
      return state;
    }
  }
});

const store = configureStore({ reducer: slice.reducer });
const reducer = combineReducers({
  redux1: slice.reducer,
  redux2: slice2.reducer
});

const store2 = configureStore({ reducer });

const RefreshPage = () => {
  window.location.reload(false);
};

export default function App() {
  console.log(store2);
  console.log(store2.getState());
  return (
    <div className="App">
      <button onClick={() => RefreshPage()}>Refresh</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
