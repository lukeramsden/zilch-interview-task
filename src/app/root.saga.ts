import { all } from "redux-saga/effects";
import { watchIssueSagas } from "./modules/issue/sagas";

export function* sagas() {
  yield all([watchIssueSagas()]);
}
