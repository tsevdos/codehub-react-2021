const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  console.log("curent state", store.getState());
};

export default logger;
