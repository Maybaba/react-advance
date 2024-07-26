import { configureStore, createSlice } from "@reduxjs/toolkit";


// action type constant : 보통 다른파일에 상수만 모아두고 관리한다. 

// 관리할 초기 상태값 객체
const initialCountState = {
  counter: 0, //name
  showCounter: true
};

//reducer: 상태 변경을 위한 순수 함수 (부수효과 (비동기코드) 가 없는 함수)
//카운터 상태 관리를 위한 reducer 정의
/*
param1 (state): 상태변경 이전의 상태 
param2 (action): 상태를 어떻게 변경할지에 대한 명세
return - 변경 후 새로운 상태값
*/

// reducer를 slice로 변경
/*
option 객체에 들어가 있는 프로퍼티 설명
prop1 : name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
prop2 : initialState - 관리할 상태값들의 초기값
prop3 : reducers - 기존 리듀서에서 사용하던 내용들(실제 액션)
*/
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCountState,
  reducers: {
    // 자동으로 복사를 해준다.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    multiply(state, action) {
      console.log("state :",state);
      console.log("action :",action);
      state.counter *= action.payload;
      // immer 라이브러리를 활용하여 자동으로 깊은복사를 해주기 때문에 복사를 생각하지 않고
      // 더 편하게 상요할 수 있다. 
    },
    toggle(state) {
      state.showCounter = !(state.showCounter);
    },
  }
});

// 단 하나의 리덕스 스토어 :  createStore 먼저 이해 후 configurestore 사용
const store = configureStore({
  reducer: counterSlice.reducer
});

// 슬라이스 안에 reduvers에 정의한 함수들을 내보내기
export const counterActions = counterSlice.actions;

//리액트의 index.js에게 store를 제공
export default store;
