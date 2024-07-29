import { createSlice } from "@reduxjs/toolkit";

// 상태관리할 값들의 초기값
const initialState = {
  cartIsVisivle: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState, //key, value가 같으면 굳이 더 안써도 된다
  reducers: {
    // 상태변경행위 (액션함수)
    toggle(state, action) {
      
    }
  }
});

export default uiSlice.reducer;