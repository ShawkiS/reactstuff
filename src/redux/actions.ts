import { Action, ActionType } from "../types"

export const addBullet = (text: string, color: string): Action => {
    return {
        type: ActionType.ADD_BULLET_POINT,
        payload: {text, color}
    }
}

export const changeInputId = (id: number): Action => {
    return {
        type: ActionType.CHANGE_INPUT_ID,
        payload: {inputId: id}
    }
}

export const removeById = (id: number): Action => {
    return {
        type: ActionType.REMOVE_BY_ID,
        payload: {removeId: id}
    }
}