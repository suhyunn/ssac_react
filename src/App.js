
import './App.css';
import TodoFooter from './component/TodoFooter';
import TodoHeader from './component/TodoHeader';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import TodoMain from './component/TodoMain';
import TodoStatus from './component/TodoStatus';



function App() {
  return (
    <>
      <TodoHeader />
      <TodoMain>
        <TodoList>
         <TodoItem />
        </TodoList>
        <TodoStatus />
      </TodoMain>
      <TodoFooter />
    </>
  );
} 

export default App;
