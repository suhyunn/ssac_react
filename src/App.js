
import './App.css';
import TodoFooter from './component/TodoFooter';
import TodoHeader from './component/TodoHeader';
// import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import TodoMain from './component/TodoMain';
import TodoStatus from './component/TodoStatus';

import {useState, useRef} from 'react';



function App() {

const [todoArray, setTodoArray] = useState([
  {
      id: 1,
      todoContent: '할일 1'
  },
  {
      id: 2,
      todoContent: '할일 2'
  },
  {
      id: 3,
      todoContent: '할일 3'
  }
  ]);

    const [todoInput, setTodoInput] = useState({
      todoContent: ''
  });

    const {todoContent} = todoInput;

    const changeTodo = (e) => {
    const {name,value} = e.target;

   setTodoInput({
    ...todoInput,
    [name]:value
   });
  };

 
  const nextId = useRef(4);

  const [number, setNumber] = useState(todoArray.length);

  const addTodo = () => {
      const newTodo = {
          id: nextId.current,
          todoContent: todoContent
      }

      setTodoArray([...todoArray, newTodo]);

      setTodoInput({
          todoContent: ''
      });

      setNumber(number+1);

      nextId.current++;
  };

  const removeTodo = (id) => {
    
    setTodoArray(
    todoArray.filter(function(todo){
        return(
            todo.id !== id
        );
     })
    );
    setNumber(number-1);
};

  return (
    <>
      <TodoHeader todoContent={todoContent} changeTodo={changeTodo} addTodo={addTodo}/>
      <TodoMain>
        <TodoList todoArray={todoArray} removeTodo={removeTodo}/>
        <TodoStatus number={number}/>
      </TodoMain>
      <TodoFooter />
    </>
  );
} 

export default App;
