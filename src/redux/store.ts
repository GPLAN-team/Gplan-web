// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import yourReducer from "./features/user/user.slice";
import graphReducer from "./features/graph/graph.slice";
import roomReducer from "./features/room/room.slice";

const rootReducer = combineReducers({
  user: yourReducer,
  graph: graphReducer,
  roomState: roomReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "graph", "room"], // specify which parts of the state to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
