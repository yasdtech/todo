import './App.css';
import { InptTodo } from './components/InputTodo';
import { CompleateTodo } from './components/CompleateTodo';
import { IncompleateTodo } from './components/IncompleateTodo';
import { useState } from 'react';

function App() {

  const [inputTodo, setInputTodo] = useState("");

  const [incompleateTodo, setIncompleateTodo] = useState([])

  const [compleateTodo, setCompleateTodo] = useState([])

  const onChangeTodoArea = (e) => setInputTodo(e.target.value)

  const addIncompleateTodo = () => {
    const newinCompleateTodo = [...incompleateTodo, inputTodo]
    setIncompleateTodo(newinCompleateTodo);
    setInputTodo("");
  }

  const addCompleate = (index) => {
    const newCompleateTodo = [...compleateTodo, incompleateTodo[index]]
    setCompleateTodo(newCompleateTodo);

    const newIncompleateTodo = [...incompleateTodo]
    newIncompleateTodo.splice(index, 1);
    setIncompleateTodo(newIncompleateTodo);
  }

  const deleteIncompleate = (index) => {
    const newIncompleateTodo = [...incompleateTodo]
    newIncompleateTodo.splice(index, 1);
    setIncompleateTodo(newIncompleateTodo);
  }

  return (
    <>
      <InptTodo
        addIncompleateTodo={addIncompleateTodo}
        inputTodo={inputTodo}
        onChangeTodoArea={onChangeTodoArea}
      />
      <IncompleateTodo
        incompleateTodo={incompleateTodo}
        addCompleate={addCompleate}
        deleteIncompleate={deleteIncompleate}
      />
      <CompleateTodo
        compleateTodo={compleateTodo}
      />
    </>
  );
}

export default App;
