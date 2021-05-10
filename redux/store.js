import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import initState from "./initialState";
import rootReducer from "./reducer";

function configureStore(initialState = initState) {
  const middleware = [thunk];
  if (typeof window !== "undefined") {
    middleware.push(createLogger({ collapsed: true }));
  }
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

const store = createStore(rootReducer, initState);
export default store;
