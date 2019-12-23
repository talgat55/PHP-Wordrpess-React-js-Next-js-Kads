import { CHANGE_SERVICE_STATE} from "../types";

export default function serviceState (state = false, action = {}){
    switch (action.type) {
        case CHANGE_SERVICE_STATE:
            return  action.payload;
        default: return state;
    }
}