import React from 'react';
import styles from './ReduxCounter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT, MULTIPLY } from '../store';

const ReduxCounter = () => {


  //useSelector 라는 훅을 통해 redux store에 이쓴 상태값을 가져옴
  const counter = useSelector(state => state.counter);

  // 리덕스 스토어에 상태값 변경을 위해 액션을 호출하는 훅 like setter
  const dispatch = useDispatch();

  // state 증가 함수
  const increseHandler = e => {
    // redux store에 접근해서 상태값을 변경시켜야 함
    // 리덕스에서는 상태값 변경을 위해 액션 함수를 호출해야 함
    // 액션 함수는 리덕스 스토어 내부에 있는 리듀서가 가지고 있음

    //dispatch parameter로 어떤 변경을 할 지 type과 변경이 필요한 payload를 전송
    dispatch({type: INCREMENT});
  };

  // state 감소 함수
  const decrementHandler = e => {
    dispatch({ type: DECREMENT});
  };

  const multiplyHandler = e => {
    dispatch({ type: MULTIPLY, payload: 4 }); //payload에 담아서 값을 전달할 수 있다.
    // 그러면 reducer의 action에 들어온다.
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{counter}</div>

      <div>
        <button onClick={increseHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={multiplyHandler}>Double</button>
      </div>

      <button>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
