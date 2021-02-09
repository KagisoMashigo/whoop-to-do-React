export const SET_USERS = 'SET_USERS';

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
        default:
            return state;
    }
};

export default dataReducer;