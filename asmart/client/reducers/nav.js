import {GET_NAVIGATION_MAIN} from "../types";

export default function user (state = {}, action = {}){
    switch (action.type) {
        case GET_NAVIGATION_MAIN:
            return action.menu;

        default: return state;
    }
}