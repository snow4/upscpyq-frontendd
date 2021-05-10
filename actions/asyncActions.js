import store from "../redux/store";
import Axios from "axios";
import * as syncActions from "./syncActions";
import ActionTypes from "../redux/actionTypes";

export const getupscquestion = (dispatch) => {
  Axios.get("http://localhost:8500/upsc/getallquestions")
    .then((response) => {
      console.log("sent successfully", response.data);
      store.dispatch(syncActions.getUpscQuestions(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

// QUIZ QUESTION
export const getupscquizquestion = (dispatch) => {
  Axios.get("http://localhost:8500/upsc/get-quiz-question")
    .then((response) => {
      // console.log("response successfully", response.data);
      store.dispatch(syncActions.getUpscQuizQuestions(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getupscSubjectQuery = (req, res) => {
  console.log("req", req);
  store.dispatch(syncActions.Loading(true));
  const data = { subject: req };
  Axios.post("http://localhost:8500/upsc/get-subject-query", data)
    .then((response) => {
      store.dispatch(syncActions.getUpscSubjectQuery(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getupscYearQuery = (req, res) => {
  console.log("req", req);
  const data = { year: req };
  Axios.post("http://localhost:8500/upsc/get-year-query", data)
    .then((response) => {
      console.log("sent successfully", response.data);
      store.dispatch(syncActions.getUpscYearQuery(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
