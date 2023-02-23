import { DECRIMENT, INCRIMENT } from "../Actions/type"

const count = 0 

const CountReducer = (state=count , action) => {
    switch (action.type) {
        case INCRIMENT:
            return state+1
        
        case DECRIMENT:
            return state -1
    
        default:
            return state 
    }
    
}

export default CountReducer