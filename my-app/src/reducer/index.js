import { combineReducers } from 'redux'




export const animalInfo = (state = [], action) => {
    switch (action.type) {
      case 'GET_ANIMAL':
        return action.value
      default:
        return state
    }
  }




const rootReducer = combineReducers({
    animalInfo
  })
  
  export { rootReducer }
  