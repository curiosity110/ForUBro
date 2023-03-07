import './App.css';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './redux/slices/counter';
import Friendslist from './component/friendslist';
import Invites from './component/invites';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.number)
  const [number, setNum] = useState(250)

  return (
    <div className="App">
      <div>
        <Invites/>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={() => dispatch(increment())}>+ 1</button>
          <button onClick={() => dispatch(decrement())}>- 1</button>
          <button onClick={() => dispatch(incrementBy(number))}>+ {number}</button>
        </div>
        <Friendslist/>
      </div>
  </div>
  );
}

export default App;