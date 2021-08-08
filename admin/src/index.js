import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {AuthContextProvider} from "./context/auth/AuthContext";
import {MovieContextProvider} from "./context/movie/MovieContext";
import {ListContextProvider} from "./context/list/ListContext";
import {UserContextProvider} from "./context/user/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);