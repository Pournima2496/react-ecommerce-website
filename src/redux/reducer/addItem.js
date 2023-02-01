
const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDCART":
          return [
            ...state,
            action.payload
          ]
            break;

        case "REMOVECART":
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        default: return state
            break;
    }
}

export default addItems;