import { observer } from "mobx-react-lite"
import './App.css';
import { counterState } from "./store/store";
import { configure, observable } from "mobx";


configure({ enforceActions: 'always' })

export const App = observer(() => {

  let testCount = 0;

  const handleIncrement = () => {
    testCount++
  }

  const handleDecrement = () => {
    testCount--
  }


  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <h2>{`count : ${counterState.count}`}</h2>
        <h2>{`count test : ${testCount}`}</h2>
        <button onClick={() => {
          counterState.increment();
        }}>increment</button>
        <button onClick={() => {
          counterState.decrement();
        }}>decrement</button>
        <button onClick={() => {
          handleIncrement()
        }}>increment test</button>
        <button onClick={() => {
          handleDecrement()
        }}>decrement test</button>
      </div>
    </div>
  );
})


