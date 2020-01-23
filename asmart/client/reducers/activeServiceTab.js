import { CHANGE_SERVICE_TAB_STATE} from "../types";

export default function serviceTabState (state = '', action = {}){
    switch (action.type) {
        case CHANGE_SERVICE_TAB_STATE:
            return  action.payload;
        default: return state;
    }
}