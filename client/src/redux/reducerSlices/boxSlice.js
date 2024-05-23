import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: "red",
  width: 50,
  height: 50,
  borderRadius: "0%",
};

const boxSlice = createSlice({
  name: "box",
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height += 50;
    },
    changeWidth(state) {
      state.width += 50;
    },
    // changeShape(state) {
    //   if(state.borderRadius=== '0%'){
    //     state.borderRadius = '50%'
    //   }else if(state.borderRadius=== '50%'){
    //     state.borderRadius = '0%'
    //   }
    // },
    changeShape(state) {
      // state.borderRadius === '0%' ? state.borderRadius = '50%' : state.borderRadius = '0%' ;
      if (state.borderRadius === "0%") {
        state.borderRadius = "50%";
        state.height = state.width;
      } else if (state.borderRadius === "50%") {
        state.borderRadius = "0%"
      }
    },
    changeBackgroundColor(state, actions) {
      state.backgroundColor = actions.payload;
    },
  },
});

export const { changeHeight, changeWidth, changeShape, changeBackgroundColor } =
  boxSlice.actions;
export default boxSlice.reducer;
