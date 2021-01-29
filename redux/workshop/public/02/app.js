const initialState = { counter: 3 };

function reducer(state, action) {
  switch (action.type) {
  case "INC":
    return { ...state, counter: state.counter + 1 };
  case "DEC":
    return { ...state, counter: state.counter - 1 };
  default:
    return state;
  }
}

const store = createStore(reducer, initialState);

// Update view - (later will be a React app)
function updateView() {
  document.querySelector("#counter").innerText = store.getState().counter;
}

store.subscribe(updateView);
store.subscribe(() => console.log(store.getState()));

// Update view for the first time
updateView();

// Actions creators
const increment = () => ({ type: "INC" });
const decrement = () => ({ type: "DEC" });

// Listen to click events
document.getElementById("inc").onclick = () => store.dispatch(increment());
document.getElementById("dec").onclick = () => store.dispatch(decrement());
