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

const store = Redux.createStore(reducer, initialState);

// Update view - (later will be a React app)
function updateView() {
  document.querySelector("#counter").innerText = store.getState().counter;
}

store.subscribe(updateView);

// Update view for the first time
updateView();

// Listen to click events
document.getElementById("inc").onclick = () => store.dispatch({ type: "INC" });
document.getElementById("dec").onclick = () => store.dispatch({ type: "DEC" });

// Q. Ask how to add action creators

// const increment = () => ({ type: "INC" });
// const decrement = () => ({ type: "DEC" });
