// features/yourSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Room {
    name: string
    id: number
    isAdded: boolean
}

interface RoomState {
  rooms: Room[];
  // rem: {name: string, id: number}[];
}

const initialState: RoomState = {
  rooms: [{'name': 'GuestRoom', 'id': 0, 'isAdded': true},{'name': 'Kitchen', 'id': 1, 'isAdded': false},{'name': 'Master Bedroom', 'id': 2, 'isAdded': false}],
};

export const roomSlice = createSlice({
  name: "roomState",
  initialState,
  reducers: {
    del: (state, action: PayloadAction<Room>) => {
        // const id = action.payload.id;
        // const room = state.rooms.find(room => room.id === id);
        // if(room) {
        //   room.isAdded = false;
        // }
        state.rooms = state.rooms.map(room => {
          if (room.id === action.payload.id) {
            return { ...room, isAdded: false };
          }
          return room;
        });
        console.log(state.rooms)
      },
    add: (state, action: PayloadAction<Room>) => {

      },
  },
});

export const { del, add } = roomSlice.actions;

export default roomSlice.reducer;
