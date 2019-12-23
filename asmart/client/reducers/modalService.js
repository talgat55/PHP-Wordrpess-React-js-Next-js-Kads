import {DEACTIVE_SERVICE_MODAL_STATE, ACTIVE_SERVICE_MODAL_STATE} from "../types";

export default function modalState (state = '', action = {}){
    switch (action.type) {
        case ACTIVE_SERVICE_MODAL_STATE:
            return  action.payload;
        case DEACTIVE_SERVICE_MODAL_STATE:
            return  action.payload;
        default: return state;
    }
}