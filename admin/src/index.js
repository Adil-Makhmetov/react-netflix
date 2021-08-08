import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import {MovieContextProvider} from "./context/movie/MovieContext";
import {ListContextProvider} from "./context/list/ListContext";
import {UserContextProvider} from "./context/user/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <ListContextProvider>
        <UserContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </UserContextProvider>
      </ListContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);