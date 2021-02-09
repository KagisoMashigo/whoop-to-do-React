import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS, 
  SET_LISTS
} from './reducer.js';
import axios from 'axios';

const useApplicationData = () => {

  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
  });
  
  // Will be used to fetch lists
  useEffect(() => {
      axios({
              method: 'GET',
              url: '/api/users/lists',
          })
          .then(({
              data
          }) => {
              console.log(data);
              dispatch({
                  type: SET_USERS,
                  users: data
              });
          })
          .catch((err) => console.log(err));
  }, []);

  // Will be used to fetch users
  useEffect(() => {
    axios({
            method: 'GET',
            url: '/api/users',
        })
        .then(({
            data
        }) => {
            console.log(data);
            dispatch({
                type: SET_USERS,
                users: data
            });
        })
        .catch((err) => console.log(err));
}, []);

  return {
      state,
      dispatch,
  };
};

export default useApplicationData;