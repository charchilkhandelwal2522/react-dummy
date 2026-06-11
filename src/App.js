import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';
import { AddToDo } from './MyComponents/AddToDo';
import { About } from './MyComponents/About';
import { Alert } from './MyComponents/Alert';
import {useEffect, useState} from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const deleteTodo = (todo) => {
    console.log("Deleting this todo", todo);
    setTodos(todos.filter((e) => e !== todo));
    showAlert("danger", `"${todo.title}" deleted successfully!`);
  }

  const editTodo = (todo) => {
    console.log("Editing this todo", todo);
    setTodos(todos.map((e) => {
      if(e.sno === todo.sno && todo.title !== "" && todo.desc !== "") {
        return {
          ...e,
          title: todo.title,
          desc: todo.desc
        };
      }
      return e;
    }));
  }
    
  const addToDo = (title, desc) => {
    console.log('I am adding this todo', title, desc);
    let sno;
    if(todos.length == 0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,  myTodo]);
    console.log(myTodo);
    
  }
  
  const [todos, setTodos] = useState(initTodo);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode])

  return (
    <>
    <Router>
      <Header
        title="My Todos List"
        searchBar={true}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => {
          const next = !prev;
          showAlert("success", next ? "Dark mode enabled" : "Light mode enabled");
          return next;
        })}
      />
      <Alert alert={alert} onClose={() => setAlert(null)} />
      <Routes>
        <Route path="/" element={
          <>
            <AddToDo addToDo={addToDo} showAlert={showAlert} />
            <ToDos todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
