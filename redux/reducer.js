import _ from "lodash";
import ActionTypes from "./actionTypes";
import initialState from "./initialState";

export default (state = initialState.modal, action) => {
  console.log("action in reducer", action);
  switch (action.type) {
    case ActionTypes.UPSC_ALL_QUESTIONS_LOADED:
      return {
        ...state,
        upscAllQuestions: action.payload.data,
      };
    case ActionTypes.UPSC_SUBJECT_QUESTIONS_LOADED:
      return {
        ...state,
        upscSubjectQuestions: action.payload,
      };
    case ActionTypes.UPSC_YEAR_QUESTIONS_LOADED:
      return {
        ...state,
        upscYearQuestions: action.payload,
      };
    case ActionTypes.UPSC_QUIZ_QUESTIONS_LOADED:
      return {
        ...state,
        upscQuizQuestions: action.payload,
      };
    case ActionTypes.UPSC_PAGE_LOADING:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
