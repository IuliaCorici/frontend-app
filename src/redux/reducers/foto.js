const initialState = {info: "", name: ""}

export default function fotoInfo(state=initialState, action) {
    if (action.type === "updateInfo") {
        return {
            ...state,
            name: action.payload.name,
            info: action.payload.info
        }
    }
    return state;
}