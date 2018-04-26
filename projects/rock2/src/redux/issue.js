const initialState = {
    data: []
}

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                data: [...state.data, action.cat]
            }
    }
}
export default issueReducer;