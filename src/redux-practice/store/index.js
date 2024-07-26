
import { createStore } from "redux";

// action type constant : 보통 다른파일에 상수만 모아두고 관리한다. 
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 관리할 초기 상태값 객체
const initialCountState = {
  counter: 0,
};

//reducer: 상태 변경을 위한 순수 함수 (부수효과 (비동기코드) 가 없는 함수)
//카운터 상태 관리를 위한 reducer 정의
/*
param1 (state): 상태변경 이전의 상태 
param2 (action): 상태를 어떻게 변경할지에 대한 명세
return - 변경 후 새로운 상태값
*/
const counterReducer = (state = initialCountState, action) => {

  console.log('prev state: ', state);
  console.log('action: ', action);

  // 상태값 변경 시 새로운 상태를 return 하여야 함
  // 1. 상태값 변경시 반드시 새로운 상태를 반환
  // 2. 상태값 변경은 반드시 새로운 객체를 할당해야 함.
  switch(action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};


// 단 하나의 리덕스 스토어 :  createStore 먼저 이해 후 configurestore 사용
const store = createStore(counterReducer);

//리액트의 index.js에게 store를 제공
export default store;
