import { SET_MODAL } from '../actionTypes';

const initialState = {
    // Note: not required, just an example "namespace"
    ModalNamespaceExample1: {
        isVisible: false,
        data: {
            // You can store whatever additional data you want here. Some modals don't need any
            // if you don't need data just dispatch setState with an empty obj as second parameter
            // example: dispatch(setModal('ModalNamespaceExample', {}, false))
        }
    },
    // Note: not required, just an example "namespace"
    ModalNamespaceExample2: {
        isVisible: false,
        data: {
            amount: 5,
            whatever: 'this is just an example'
        }
    },
    // the actual namespace for the "ModalCart" does not exist yet.
    // It get's initialized on first render after npm start

    ModalCart: {
        data: {},
        isVisible: false
    }
};

// In these solutions we only have one Modal (the ModalCart)
// but this reducer is built to support the storage of state for an unlimited amount of Modals.

// The "GenericModal" component can be reused to create other Modals.
// and the action "setState" can be used to store data for it under a specific "namespace"
const modals = (modals = initialState, action) => {
    switch (action.type) {
        case SET_MODAL: {
            const { namespace, data, isVisible = null } = action.payload;
            const newData = data || { ...modals[namespace].data }; // copy old data if no new data was provided

            // handling edge case where namespace wasn't existing  no visibility was defined earlier
            const oldIsVisible = modals[namespace] && modals[namespace].isVisible ? modals[namespace].isVisible : false;

            // prevents an undefined "isVisible" from overwriting the visibility to "false" instead of not changing it
            const newIsVisible = isVisible === null || isVisible === undefined ? oldIsVisible : !isVisible; // previous  ... ? oldIsVisible : isVisible

            return { ...modals, [namespace]: { isVisible: newIsVisible, data: newData } };
        }
        default:
            return modals;
    }
};

export default modals;
