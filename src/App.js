import './App.css';
import { Footer } from './MyComponents/Footer';
import Navbar from './MyComponents/Navbar';
import TodoList from './MyComponents/TodoList';

function App() {
  return (
    <>
      <Navbar title="My Todo App" navBar={false}/>
      <TodoList/>
      <Footer/>
    </>
  );
}

export default App;
