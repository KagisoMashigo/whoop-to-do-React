export const SET_USERS = 'SET_USERS';
export const SET_LISTS = 'SET_LISTS';

const dataReducer = (state, action) => {
    console.log("INiTIAL ACTION", action)
    switch (action.type) {
        case SET_USERS:
            console.log("DAT STATE", state)
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
        case SET_LISTS:
            console.log("DAT STATE", state)
            return {
                ...state,
                users: action.lists,
                    loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;