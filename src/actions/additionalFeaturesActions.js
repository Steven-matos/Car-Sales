export const AddFeature = newItem => {
    return {type: 'ADD_FEATURE', payload: newItem}
}

export const RemoveFeature = removeItem => {
    return {type: 'REMOVE_FEATURE', payload: removeItem}
}