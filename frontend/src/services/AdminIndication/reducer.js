import {GET_I_NAME} from './actions';
import {FETCH_INDICATION, FETCH_INDICATION_SUCCESS, FETCH_INDICATION_FAILURE} from './actions';
import {DELETE_INDICATION, DELETE_INDICATION_SUCCESS, DELETE_INDICATION_FAILURE} from './actions';

const initialState = {
    name: null,
    indication: null,
    response: null
};

const adminIndicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_I_NAME:
            return { ...state, name: action.payload.name }

        case FETCH_INDICATION:
            return { ...state, error: null }

        case FETCH_INDICATION_SUCCESS:
            return { ...state, error: null, indication: action.payload.indication }

        case FETCH_INDICATION_FAILURE:
            return { ...state, error: action.payload.error}

        case DELETE_INDICATION:
            return { ...state, error: null }

        case DELETE_INDICATION_SUCCESS:
            return { ...state, error: null, response: action.payload.response }

        case DELETE_INDICATION_FAILURE:
            return { ...state, error: action.payload.error}

        default:
            return state
    }

}
export const getAdminIndication = state => state.indication || [];
export default adminIndicationReducer;
