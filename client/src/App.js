import './App.css';
import useApplicationData from "./hooks/useApplicationData"

const App = () => {
    const {
        state,
        dispatch
    } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > User Name: {user.username} / User Email: {user.email} </li>   
  ));
    const todosList = state.todos.map((todo) => (<li key={todo.id} > Todo: {todo.title} / Description: {todo.description} </li>   
  ));

  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>

    <h1> Todos </h1>

    <ul> {todosList} </ul>
  </div >
  );
};

export default App;
