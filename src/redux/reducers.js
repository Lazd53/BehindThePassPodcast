import {combineReducers} from 'redux';
import {
  IMPORT_PODCASTS,
  SELECT_PODCAST,
  CLEAR_ID
  } from "./actionTypes";

const testPods = {
  lskdfj: {
    id: "lskdfj",
    episodeNo: 1,
    name: "theFirstEpisode",
    runTime: "1232",
    airDate: "11/12/18"
  },
  aarsafd: {
    id: "aarsafd",
    episodeNo: 2,
    name: "theSecondEpisode",
    runTime: "142",
    airDate: "11/14/18"
  },
  nsrssef: {
    id: "nsrssef",
    episodeNo: 3,
    name: "theThirdEpisode",
    runTime: "142",
    airDate: "11/15/18"
  },
  asdfevcd: {
    id: "asdfevcd",
    episodeNo: 4,
    name: "theFourthEpisode",
    runTime: "3953",
    airDate: "12/15/18"
  }
}

const allPodcasts = ( state = testPods, action) => {
  switch(action.type){
    case IMPORT_PODCASTS:
      return action.podcasts
    default:
      return state
  }
}

const selectedPodcast = (state="", action) => {
  switch(action.type){
    case SELECT_PODCAST:
      return action.podcastID
    case CLEAR_ID:
      return ""
    default:
      return state
  }
}

export const rootReducer = combineReducers({allPodcasts, selectedPodcast})
