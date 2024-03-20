import { createSlice } from "@reduxjs/toolkit";
import { tabs } from "../../data/tabs"

const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    tabs: tabs,
    selectedTabIndex: 0,
    selectedInnerTabIndex: 0
  },
  reducers: {
    updateTabSelection: (state, action) => {
      state.selectedInnerTabIndex = 0;
      state.selectedTabIndex = action.payload.index;
    },
    updateInnerTabSelection: (state, action) => {
      state.selectedInnerTabIndex = action.payload.index;
    }
  }
})

export default tabsSlice.reducer
export const {updateTabSelection, updateInnerTabSelection} = tabsSlice.actions

