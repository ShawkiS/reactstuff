import { Action, ActionType, State } from "../types";
import { addById, removeById } from "../utils";

export const reducer = (state: State = {bullet: {id: 0, children: []}, currentId: 0, inputId: 0}, action: Action): any => {
    const bullet = state.bullet ? state.bullet : {id: 0}

    switch(action.type) {
        case ActionType.ADD_BULLET_POINT:
            state.currentId +=1
            return {...state, bullet: addById([bullet], state.inputId, [{id: state.currentId, text: action.payload.text, color: action.payload.color, children: []}])};

        case ActionType.CHANGE_INPUT_ID:
         return {...state, inputId: action.payload.inputId};

        case ActionType.REMOVE_BY_ID: 
            const result = removeById([bullet], action.payload.removeId);
            return {...state, bullet: result};

        default: 
            return state
    }
}