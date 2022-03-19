import { filterdGamesBar } from './filteredGamesBar';
import { filterdGames } from './filteredGames';
import { range } from './range';
import { loaded } from './loaded';
import { sorting } from './sorting';
import { category } from './category';
import { genres } from './genres';
import { games } from './games';
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  games,
  genres,
  category,
  sorting,
  loaded,
  range,
  filterdGames,
  filterdGamesBar
})

export type RootState = ReturnType<typeof rootReducers>