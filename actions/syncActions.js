import ActionTypes from "../redux/actionTypes";

export const getUpscQuestions = (data) => ({
  type: ActionTypes.GET_UPSC_QUESTIONS,
  payload: data,
});

export const getUpscSubjectQuery = (data) => ({
  type: ActionTypes.UPSC_SUBJECT_QUESTIONS_LOADED,
  payload: data,
});
export const getUpscYearQuery = (data) => ({
  type: ActionTypes.UPSC_YEAR_QUESTIONS_LOADED,
  payload: data,
});
export const Loading = (data) => ({
  type: ActionTypes.UPSC_PAGE_LOADING,
  payload: data,
});

export const getUpscQuizQuestions = (data) => ({
  type: ActionTypes.UPSC_QUIZ_QUESTIONS_LOADED,
  payload: data,
});
