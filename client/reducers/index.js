const INIT_CHAT = 'INIT_CHAT'

export default function profile(state = {}, action){
  let { count = 0 } = state
  return {count: ++count}

  switch(action.type){
    case INIT_CHAT:
      return state
    default: return state
  }
}
