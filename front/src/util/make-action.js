export const action = (actionType) => {
    return (payload) => {
        return {
            type: actionType,
            payload
        }
    }
};

export const error = (actionType) => {
    return (e) => {
        return {
            type: actionType,
            errorData: e
        }
    }
};