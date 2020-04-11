import {
    ACTIVE_MODAL_STATE,
    ACTIVE_OVERLAY_STATE,
    ACTIVE_SERVICE_MODAL_STATE,
    ACTIVE_SUCCESS_MODAL_STATE,
    CHANGE_SERVICE_STATE,
    CHANGE_SERVICE_TAB_STATE,
    DEACTIVE_MODAL_STATE,
    DEACTIVE_OVERLAY_STATE,
    DEACTIVE_SERVICE_MODAL_STATE,
    DEACTIVE_SUCCESS_MODAL_STATE
} from "../types";


export const ChangeStateModal = () => {
    return {
        type: ACTIVE_MODAL_STATE,
        payload: true
    }
};


export const ChangeStateSuccessModal = () => {
    return {
        type: ACTIVE_SUCCESS_MODAL_STATE,
        payload: true
    }
};

export const DisableStateSuccessModal = () => {
    return {
        type: DEACTIVE_SUCCESS_MODAL_STATE,
        payload: false
    }
};

export const DisableStateModal = () => {
    return {
        type: DEACTIVE_MODAL_STATE,
        payload: false
    }
};

export const DisableServiceModal = () => {
    return {
        type: DEACTIVE_SERVICE_MODAL_STATE,
        payload: false
    }
};



export const ActiveServiceModal = () => {
    return {
        type: ACTIVE_SERVICE_MODAL_STATE,
        payload: true
    }
};


export const ChangeServiceState = e => {
    return {
        type: CHANGE_SERVICE_STATE,
        payload: e
    }

};

export const ChangeServiceTabState = e => {
    return {
        type: CHANGE_SERVICE_TAB_STATE,
        payload: e
    }
};

export const ActiveOverlayState = () => {
    return {
        type: ACTIVE_OVERLAY_STATE,
        payload: true
    }
};

export const DeactiveOverlayState = () => {
    return {
        type: DEACTIVE_OVERLAY_STATE,
        payload:false
    }
};

export const EnableServiceModal = () => {
    return async dispatch => {
        dispatch(ActiveServiceModal());
        dispatch(ActiveOverlayState())
    }
};

export const DisableModal = () => {
    return async dispatch => {
        dispatch(DisableServiceModal());
        dispatch(DeactiveOverlayState())
    }
};

