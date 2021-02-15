export const SET_USERS = 'SET_USERS';
export const SET_TODOS = 'SET_TODOS';

const dataReducer = (state, action) => {
    console.log("INiTIAL ACTION", action)
    switch (action.type) {
        case SET_USERS:
            console.log("DAT USER STATE", state)
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
        case SET_TODOS:
            console.log("DAT TODO STATE", state)
            return {
                ...state,
                todos: action.todos,
                    loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;