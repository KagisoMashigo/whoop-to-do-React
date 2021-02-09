import './App.css';
import useApplicationData from "./hooks/useApplicationData"

const App = () => {
    const {
        state,
        dispatch
    } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > User Name: {user.username} / User Email: {user.email} </li>   
  ));
  //   const lists = state.lists.map((list) => (<li key={list.id} > User Name: {list.username} / User Email: {list.email} </li>   
  // ));

  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>

    <h1> Lists </h1>

    <ul> List </ul>
  </div >
  );
};

export default App;
