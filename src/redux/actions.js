import {
  IMPORT_PODCASTS,
  SELECT_PODCAST,
  CLEAR_ID
  } from "./actionTypes";

export const importPodcasts = (importedPods) => {
  type: IMPORT_PODCASTS,
  podcasts: importedPods
};

export const selectPodcast = (podcastID) => {
  type: SELECT_PODCAST,
  podcastID
}
