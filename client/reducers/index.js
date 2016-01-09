export function count(state = {}, action){
  switch(action.type){
    case 'INCREMENT_COUNT':
      const { count = 0} = state
      return {...state, count: count + 1}
    default: return state
  }
}
