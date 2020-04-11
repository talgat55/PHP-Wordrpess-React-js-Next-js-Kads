import {ACTIVE_MODAL_STATE} from "../types";


export const ChangeStateModal = () => {
    return {
        type: ACTIVE_MODAL_STATE,
        payload: true
    }
};