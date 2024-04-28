// Importing action types from ActionType file
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";

// Initial state for the authentication reducer
const initialState = {
    user: null,         // Current authenticated user (null if not logged in)
    isLoading: false,   // Loading state indicator
    error: null,        // Error state for any authentication-related errors
    jwt: null           // JWT token for authentication
};

// Authentication reducer function
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Request actions: Set loading to true and clear any previous errors
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null };

        // Success actions: Update state with payload and clear loading and errors
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload };
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload };

        // Failure actions: Update error state and clear loading
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // Logout action: Reset state to initial state
        case LOGOUT:
            return { ...initialState };

        // Default case: Return current state
        default:
            return state;
    }
};
