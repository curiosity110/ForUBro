import { SET_MODAL } from '../actionTypes';

// one action to rule them all.
export const setModal = (namespace, data, isVisible) => {
    return {
        type: SET_MODAL,
        payload: { namespace, data, isVisible }
    };
};
