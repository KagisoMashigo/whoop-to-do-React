import './App.css';
import useApplicationData from "./hooks/useApplicationData"

const App = () => {
    const {
        state,
        dispatch
    } = useApplicationData();
      const userList = state.users.map((user) => (<li key={user.id} > User Name: {user.username} / User Email: {user.email} </li>
  ));
  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>

    <h1> Categories </h1>

    <ul> List </ul>
  </div >
  );
};

export default App;
