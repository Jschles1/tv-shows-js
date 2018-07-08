import axios from "axios";
import { FETCH_USER, ADD_SHOW } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitNewShow = data => async dispatch => {
  const res = await axios.post("/api/shows", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const show = await res.json();
  dispatch({ type: ADD_SHOW, payload: show });
};
